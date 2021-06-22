import {Link } from "react-router-dom";
const Transactions = ({ transactions }) => {
  return (
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <li key={index} className="transactions">
              <p>{transaction.date}</p>
              <Link to={`/transactions/${index}`} className="transaction-link">
                {transaction.name}
              </Link>
              <p>{transaction.amount}</p>
            </li>
          );
        })}
      </ul>
  );
};

export default Transactions;
