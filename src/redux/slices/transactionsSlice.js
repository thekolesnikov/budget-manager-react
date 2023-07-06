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
            });
        },
        // changeStatus(state, action) {
        //     const filterArr = state.filter(
        //         (todo) => todo.id === action.payload
        //     );
        //     filterArr[0].status = !filterArr[0].status;
        // },
    },
});

export default transactionSlice.reducer;
