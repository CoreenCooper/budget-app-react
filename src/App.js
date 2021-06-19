import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "./util/apiURL";
import axios from "axios";

const API = apiURL();

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = async (newTransactions) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransactions);
      setTransactions((prevTransactions) => [...prevTransactions, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTotal = () => {
    let total = 0;
    transactions.forEach((transaction) => {
      total += (Number(transaction.amount))
    });
    return total
  };

  useEffect(() => {
    fetchTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/transactions">
          <Index transactions={transactions} total={getTotal()} />
        </Route>
        <Route path="/transactions/new">
          <New addTransaction={addTransaction} />
        </Route>
        <Route exact path="/transactions/:index">
          <Show />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
