import EditTransactionForm from "../Components/TransactionEditForm";

const Edit = ({ updateTransaction }) => {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <EditTransactionForm updateTransaction={updateTransaction} />
    </div>
  );
}

export default Edit;