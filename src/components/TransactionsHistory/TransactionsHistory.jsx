import { useSelector, useDispatch } from 'react-redux';
import styles from './TransactionsHistory.module.css';
import { timeConverter } from '../../utils/TimeConverter';
import { transactionSlice } from '../../redux/slices/transactionsSlice';
import { removeFromLS } from '../../utils/LocalStorage';

function TransactionsHistory() {
    const transactions = useSelector((state) => state.transactions);

    const dispatch = useDispatch();
    const { deleteTransaction } = transactionSlice.actions;

    return (
        <div className={styles.history}>
            {transactions.length ? (
                transactions.map((transaction) => {
                    let date = timeConverter(transaction.id);
                    return (
                        <div
                            className={
                                transaction.transactionType === 'Earning'
                                    ? styles.history__item_green
                                    : styles.history__item_red
                            }
                            key={transaction.id}
                        >
                            <p>
                                Transaction name: {transaction.transactionName}
                            </p>
                            <p>Total: {transaction.amount}$</p>
                            <p>Date: {date}</p>
                            <p>
                                Transaction type: {transaction.transactionType}
                            </p>
                            <button
                                className={styles.history__button}
                                onClick={() => {
                                    removeFromLS(transaction.id);
                                    dispatch(deleteTransaction(transaction.id));
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })
            ) : (
                <div>No transactions</div>
            )}
        </div>
    );
}

export default TransactionsHistory;
