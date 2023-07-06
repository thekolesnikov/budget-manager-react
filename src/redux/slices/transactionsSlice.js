import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction(state, action) {
            state.push({
                transactionName: action.payload.transactionName,
                amount: action.payload.amount,
                transactionType: action.payload.transactionType,
                id: action.payload.id,
            });
        },
        deleteTransaction(state, action) {
            return state.filter(
                (transaction) => transaction.id !== action.payload
            );
        },
    },
});

export default transactionSlice.reducer;
