import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransactionDetails = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let history = useHistory();

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

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };

  return (
    <section>
      <p>{transaction.from} - By {transaction.captainName}</p>
      <p>{transaction.name}</p>
      <p>{transaction.date}</p>
      <p>{transaction.amount}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </section>
  );
}

export default withRouter(TransactionDetails);
