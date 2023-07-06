import TransactionForm from '../../components/TransactionForm/TransactionForm';
import TotalTransactions from '../../components/TotalTransactions/TotalTransactions';

function HomePage() {
    return (
        <div>
            <TransactionForm />
            <TotalTransactions />
        </div>
    );
}

export default HomePage;
