import React, { useState, useEffect } from "react";
import "./App.scss";
// import keg from "./assets/keg-icon.svg";
import logo from "./assets/foobar-logo.svg";
import Overview from "./components/Overview";
import StorageList from "./components/StorageList";
import TapList from "./components/TapList";
import QueueList from "./components/QueueList";
import ServingList from "./components/ServingList";

function App() {
  const [data, setItems] = useState([]);

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
    return () => clearInterval(id);
  }, []);

  return (
    <div className="App">
      <main>
        <aside>
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
        </div>
      </main>
    </div>
  );
}

export default App;
