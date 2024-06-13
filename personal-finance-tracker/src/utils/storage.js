// src/utils/storage.js
export const getTransactions = () => {
    const transactions = localStorage.getItem('transactions');
    return transactions ? JSON.parse(transactions) : [];
  };
  
  export const saveTransactions = (transactions) => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };
  