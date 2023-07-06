import TransactionForm from '../../components/TransactionForm/TransactionForm';
import TotalTransactions from '../../components/TotalTransactions/TotalTransactions';
import styles from './HomePage.module.css';

function HomePage() {
    return (
        <div className={styles.home}>
            <TransactionForm />
            <TotalTransactions />
        </div>
    );
}

export default HomePage;
