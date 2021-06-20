import Transactions from "../Components/Transactions";

const Index = ({transactions, total}) => {
  return (
    <main className="component">
      <h2>Bank Account Total: ${total.toFixed(2)}</h2>
      <Transactions transactions={transactions}/>
    </main>
  );
};

export default Index;
