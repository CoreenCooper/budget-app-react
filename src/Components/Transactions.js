const Transactions = ({ transactions }) => {
  return (
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <li key={index} className="transactions">
              <p>{transaction.date}</p>
              <a href={`/transactions/${index}`} className="transaction-link">
                {transaction.name}
              </a>
              <p>{transaction.amount}</p>
            </li>
          );
        })}
      </ul>
  );
};

export default Transactions;
