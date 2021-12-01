import React, { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://foobar-team10.herokuapp.com/";
    console.log(url);
    const fetchData = async () => {
      try {
        // const res = await fetch(url);
        // const json = await res.json();
        // setData(json);
        fetch("https://foobar-team10.herokuapp.com/")
          .then((res) => res.json())
          .then((data) => {
            console.log(data); // <-- (2) invoke on mount
          });
      } catch (error) {
        console.log(error);
      }
      console.log(data);
    };
    const id = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  function DisplayData(props) {
    return (
      <div>
        <div>Hello</div>
        <p> time: {props.data.timestamp}</p>
        {/* <h1>barname: {props.data.bar.name}</h1>
        <p> storage: {props.data.storage[0].name}</p> */}
      </div>
    );
  }

  function OrderList(props) {
    console.log(props);
    const queueList = props.queue.map((order) => <li key={order.id}> {order.id} </li>);
    return (
      <div>
        <h2>Orders here:</h2>
        {queueList}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <DisplayData data={data} />
        {/* <OrderList data={data} /> */}
      </header>
    </div>
  );
}

export default App;
