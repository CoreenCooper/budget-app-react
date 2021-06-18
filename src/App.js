import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import { v4 as uuid } from 'uuid';
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "./util/apiURL";
import axios from "axios";

const API = apiURL();

const App = () => {
  const [transactions, settransactions] = useState([]);

  const addTransactions = async (newTransactions) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransactions);
      settransactions((prevtransactions) => [...prevtransactions, res.data]);
    } catch (error) {}
  };

  const updateTransactions = async (updatedTransactions, index) => {
    try {
      await axios.put(`${API}/transactions/${index}`, updatedTransactions);
      const newtransactions = [...transactions];
      newtransactions[index] = updatedTransactions;
      settransactions(newtransactions);
    } catch (error) {
      console.Transactions(error);
    }
  };

  const deleteTransactions = async (index) => {
    try {
    await axios.delete(`${API}/transactions/${index}/`);
    let dummyState = [...transactions];
    dummyState = transactions.splice(index, 1)
    settransactions(dummyState)
    } catch (error) {
      console.Transactions(error)
    }
  }

  const fetchtransactions = async () => {
    try {
      const res = await axios.get(`${API}/transactions`);
      settransactions(res.data);
    } catch (error) {
      console.Transactions(error);
    }
  };

  useEffect(() => {
    fetchtransactions();
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/transactions">
          <Index transactions={transactions} uuidv4={uuid}/>
        </Route>
        <Route path="/transactions/new">
          <New addTransactions={addTransactions} />
        </Route>
        <Route path="/transactions/:index/edit">
          <Edit updateTransactions={updateTransactions} />
        </Route>
        <Route exact path="/transactions/:index">
          <Show deleteTransactions={deleteTransactions}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
