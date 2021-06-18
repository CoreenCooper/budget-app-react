import { useState } from "react";
import { withRouter } from "react-router-dom";

const TransactionNewForm = (props) => {
  const [transaction, setTransaction] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({
      ...transaction,
      mistakesWereMadeToday: !transaction.mistakesWereMadeToday,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addtransaction, history } = props;
    addtransaction(transaction);
    history.push("/transactions");
  };

  return (
    <section className="new-transaction">
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
          onChange={handleCheckboxChange}
        />
        <button type="submit">CREATE NEW ITEM</button>
      </form>
    </section>
  );
};

export default withRouter(TransactionNewForm);
