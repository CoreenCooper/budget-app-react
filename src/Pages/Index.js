import Transactions from "../Components/Transactions";

const Index = ({transactions, accountTotal}) => {
  return (
    <section>
      <h2>Index - Bank Account Total: {accountTotal}</h2>
      <Transactions transactions={transactions}/>
    </section>
  );
};

export default Index;
