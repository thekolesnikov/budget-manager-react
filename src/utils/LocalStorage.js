export function addToLS(transaction) {
    if (!localStorage.getItem('transactions')) {
        localStorage.setItem('transactions', JSON.stringify([transaction]));
    } else {
        const transactions = JSON.parse(localStorage.getItem('transactions'));
        transactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }
}

export function removeFromLS(id) {
    let transactions = JSON.parse(localStorage.getItem('transactions'));
    transactions = transactions.filter((transaction) => transaction.id !== id);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}
