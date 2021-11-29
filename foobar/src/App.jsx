import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";



function App() {
  const [count, setCount] = useState(0);
  const [data, setStorage] = useState([]);
 console.log 
  const url = "https://foobar-team10.herokuapp.com/";
console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setStorage(json);
      } catch (error) {
        console.log(error);
      }
    };
    const id = setInterval(() => {
      fetchData(); // <-- (3) invoke in interval callback
    }, 5000);
    fetchData();
    return () => clearInterval(id);
  }, []);


console.log(data);

 function Storage(props) {
    return (
   <section> 
     <h1>barname: {props.data && props.data.bar.name}</h1>
     <p> time: {props.data ? props.data.timestamp:"hello"}</p>
     <p> time: {props.data ? props.data.storage[0].name:"hello"}</p>
    </section> 
    );
  }   

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Storage data={data}/> 
        <p>Hello Vite + React!</p>
        <p>
          
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {" | "}
          <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
