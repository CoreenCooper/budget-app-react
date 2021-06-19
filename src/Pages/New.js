import NewTransactionForm from "../Components/TransactionNewForm";

const New = ({ addTransaction }) => {
  return (
    <section className="component">
      <h2>Add a new item</h2>
      <NewTransactionForm addTransaction={addTransaction} />
    </section>
  );
}

export default New;
