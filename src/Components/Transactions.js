const Transactions = ({ transactions }) => {
  return (
    <section>
      <ul>
        {transactions.map((transaction, index) => {
          return (
            // not certain why key doesn't display in dev tools
            <li key={index} index={index} className="transactions">
              <p>{transaction.date}</p>
              <a href={`/transactions/${index}`} className="transaction-link">
                {transaction.name}
              </a>
              <p>{transaction.amount}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Transactions;
