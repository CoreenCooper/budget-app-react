import Transactions from "../Components/Transactions";

const Index = ({transactions, total}) => {
  return (
    <section className="component">
      <h2>Bank Account Total: {total}</h2>
      <Transactions transactions={transactions}/>
    </section>
  );
};

export default Index;
