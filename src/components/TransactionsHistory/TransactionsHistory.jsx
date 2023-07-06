import { useSelector } from 'react-redux';
import styles from './TransactionsHistory.module.css';
import { timeConverter } from '../../utils/TimeConverter';

function TransactionsHistory() {
    const transactions = useSelector((state) => state.transactions);
    console.log(transactions);

    return (
        <div className={styles.history}>
            {transactions.map((transaction) => {
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
                        <p>Transaction name: {transaction.transactionName}</p>
                        <p>Total: {transaction.amount}$</p>
                        <p>Date: {date}</p>
                        <p>Transaction type: {transaction.transactionType}</p>
                        <button className={styles.history__button}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default TransactionsHistory;
