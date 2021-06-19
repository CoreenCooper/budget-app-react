import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${API}/transactions/${index}`);
      setTransaction(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransaction();
    // eslint-disable-next-line
  }, []);

  return (
    <section id="transaction-details">
      <p>From: {transaction.from}</p>
      <p>Name: {transaction.name}</p>
      <p>Date: {transaction.date}</p>
      <p>Amount: {transaction.amount}</p>
      <Link to={`/transactions`}>
        <button>Back</button>
      </Link>
    </section>
  );
};

export default withRouter(TransactionDetails);
