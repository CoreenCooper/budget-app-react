const Transactions = ({ transactions }) => {
    return (
      <section>
        <ul>
          {transactions.map((transaction, index) => {
            // debugger
            return <li key={index} index={index}><a href={`/transactions/${index}`}>{transaction.from} {transaction.date} {transaction.name} {transaction.amount} </a></li>;
          })}
        </ul>
      </section>
    );
  };
  
  export default Transactions;
  