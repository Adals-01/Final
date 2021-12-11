import React, { useState, useEffect } from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Order/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beerlist from "./components/Order/beerlist";
import Mainpage from "./components/Order/mainpage";

function App() {
  const [data, setItems] = useState([]);
  const [beerdata, setBeers] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`https://foobar-team10.herokuapp.com/`);
        const data = await response.json();
        setItems(data);
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

  return (
    <div className="App">
      {/* <aside>
          <h2>Taps</h2>
          {data.taps && <TapList taps={data.taps} />}
        </aside>
        <div className="right-side">
          <div className="overview-logo">
            <Overview data={data} />
            <img className="foobar-logo" src={logo} alt={"foobar-logo"} />
          </div>
          <h2>Orders</h2>
          <div className="serving-and-queue">
            {data.serving && <ServingList serving={data.serving} />}
            {data.queue && <QueueList queue={data.queue} />}
          </div>
          <h2>Storage</h2>
          {data.storage && <StorageList storages={data.storage} />}
        </div> */}
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard data={data} />}></Route>
          <Route path="/home" element={<Homepage data={data} />}></Route>
          <Route path="/mainpage" element={<Mainpage data={beerdata} />}></Route>
         {/*  <Route path="/beerlist" element={<Beerlist data={beerdata} />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
