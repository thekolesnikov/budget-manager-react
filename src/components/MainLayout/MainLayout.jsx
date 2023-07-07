import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { transactionSlice } from '../../redux/slices/transactionsSlice';
import NavMenu from '../NavMenu/NavMenu';

function MainLayout() {
    const transactionsFromLS = JSON.parse(localStorage.getItem('transactions'));

    const dispatch = useDispatch();
    const { addTransaction } = transactionSlice.actions;

    useEffect(() => {
        transactionsFromLS?.map((transaction) =>
            dispatch(addTransaction(transaction))
        );
    });

    return (
        <>
            <NavMenu />
            <main className="container">
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
