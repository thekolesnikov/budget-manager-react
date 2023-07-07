import { useState } from 'react';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import TotalTransactions from '../../components/TotalTransactions/TotalTransactions';
import styles from './HomePage.module.css';

function HomePage() {
    const [totalBalance, setTotalBalance] = useState(0);
    return (
        <div className={styles.home}>
            <TransactionForm totalBalance={totalBalance} />
            <TotalTransactions
                totalBalance={totalBalance}
                setTotalBalance={setTotalBalance}
            />
        </div>
    );
}

export default HomePage;
