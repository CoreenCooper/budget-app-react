import NewTransactionForm from "../Components/TransactionNewForm";

const New = ({ addTransaction }) => {
  return (
    <div className="component">
      <h2>Add a new item</h2>
      <NewTransactionForm addTransaction={addTransaction} />
    </div>
  );
}

export default New;
