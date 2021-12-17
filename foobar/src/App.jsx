import React, { useState, useEffect } from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Order/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Beerlist from "./components/Order/beerlist";
import Links from "./components/Links";
import Mainpage from "./components/Order/mainpage";

function App() {
  const [data, setItems] = useState([]);
  const [beerdata, setBeers] = useState([]);
  const [oldServing, setOldServing] = useState([]);
  const [newServing, setNewServing] = useState([]);
  const [ordersCompleted, setOrdersCompleted] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`https://foobar-team10.herokuapp.com/`);
        const data = await response.json();
        setItems(data);
        setNewServing([...data.serving]);
      } catch (err) {
        console.log(err);
      }
    };
    const id = setInterval(() => {
      fetchItems();
    }, 5000);
    fetchItems();

    fetch("https://foobar-team10.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then((beerdata) => {
        setBeers(beerdata);
        fetchItems(); // <-- (2) invoke on mount
      });

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (oldServing.length > 0) {
      oldServing.forEach((oldOrder, i, arr) => {
        const findIt = [...newServing].find((newOrder) => newOrder.id === oldOrder.id);
        !findIt && setOrdersCompleted(ordersCompleted + 1);
        i === arr.length - 1 && setOldServing([...newServing]);
      });
    } else {
      setOldServing([...newServing]);
    }
  }, [newServing]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Links />}></Route>
          <Route path="/dashboard" element={<Dashboard data={data} ordersCompleted={ordersCompleted} />}></Route>
          <Route path="/home" element={<Homepage data={data} />}></Route>
          <Route path="/mainpage" element={<Mainpage data={beerdata} />}></Route>
          {/*  <Route path="/beerlist" element={<Beerlist data={beerdata} />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
