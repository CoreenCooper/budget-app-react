import NewTransactionForm from "../Components/TransactionNewForm";

const New = ({ addTransaction }) => {
  return (
    <div id="new-transaction">
      <h2>Add a new item</h2>
      <NewTransactionForm addTransaction={addTransaction} />
    </div>
  );
}

export default New;
