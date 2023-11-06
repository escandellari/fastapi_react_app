import React, { useState, useEffect } from "react";
import api from "../api";

const Table = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransaction = async () => {
    const response = await api.get("/transactions/");
    setTransactions(response.data);
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Income?</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.description}</td>
            <td>{transaction.is_income ? "Yes" : "No"}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
