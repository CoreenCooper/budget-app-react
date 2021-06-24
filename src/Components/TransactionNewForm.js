import { useState } from "react";

const TransactionNewForm = ({ addTransaction, history }) => {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(transaction);
    history.push("/transactions");
  };

  return (
    <section id="new-transaction">
      <form id="new-transaction-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleChange}
          placeholder="date"
          required
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={transaction.name}
          placeholder="name"
          onChange={handleChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          placeholder="from"
          onChange={handleChange}
        />
        <button type="submit">CREATE NEW ITEM</button>
      </form>
    </section>
  );
};

export default TransactionNewForm;
