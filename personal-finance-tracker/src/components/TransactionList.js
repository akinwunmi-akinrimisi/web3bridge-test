// src/components/TransactionList.js
import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction, index) => (
        <li key={index}>
          <span>{transaction.category}</span>
          <span>{transaction.type === 'income' ? '+' : '-'}${transaction.amount}</span>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
