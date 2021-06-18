import Transactions from "../Components/Transactions";

const Index = ({transactions, accountTotal}) => {
  return (
    <section className="component">
      <h2>Bank Account Total: {accountTotal}</h2>
      <Transactions transactions={transactions}/>
    </section>
  );
};

export default Index;
