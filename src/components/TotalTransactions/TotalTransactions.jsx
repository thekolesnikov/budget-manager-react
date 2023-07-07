import { useSelector } from 'react-redux';
import styles from './TotalTransactions.module.css';
import { useEffect } from 'react';

function TotalTransactions({ totalBalance, setTotalBalance }) {
    const transactions = useSelector((state) => state.transactions);

    const totalEarnings = transactions.reduce((accumulator, transaction) => {
        if (transaction.transactionType === 'Earning') {
            return accumulator + transaction.amount;
        } else {
            return accumulator;
        }
    }, 0);

    const totalExpenses = transactions.reduce((accumulator, transaction) => {
        if (transaction.transactionType === 'Expense') {
            return accumulator + transaction.amount;
        } else {
            return accumulator;
        }
    }, 0);

    useEffect(() => setTotalBalance(totalEarnings - totalExpenses));

    return (
        <div>
            <div className={styles.total__item}>
                Earnings:
                <span className={styles.total__item_green}>
                    {totalEarnings}
                </span>
            </div>
            <div className={styles.total__item}>
                Expense:
                <span className={styles.total__item_red}>{totalExpenses}</span>
            </div>
            <div className={styles.total__item}>
                Total balance:
                <span
                    className={
                        totalBalance >= 0
                            ? styles.total__item_green
                            : styles.total__item_red
                    }
                >
                    {totalBalance}
                </span>
            </div>
        </div>
    );
}

export default TotalTransactions;
