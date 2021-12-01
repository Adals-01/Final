import React, { useState, useEffect } from "react";
import "./App.scss";

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
    }, 25000);
    fetchItems();
    return () => clearInterval(id);
  }, []);

  function Overview(props) {
    return (
      <section>
        <div>Hello</div>
        <p> time: {props.data && props.data.timestamp}</p>

        <h1>Hello {props.data.bar && props.data.bar.name} </h1>
        <p> Tap: {props.data.storage && props.data.storage[0].name}</p>
      </section>
    );
  }

  // function StorageList(props) {
  //   const StorageList = [props.storage];
  //   const newArray = storage.map((storage) => <StorageItem key={storage.id} {...storage} />);
  //   return (
  //     <section>
  //       <h1> Productlist </h1>
  //       <section className="Productlist">{newArray}</section>
  //     </section>
  //   );
  // }

  // function StorageItem() {
  //   return (
  //     <section>
  //       <h1> Productlist </h1>
  //     </section>
  //   );
  // }

  return (
    <div className="App">
      <div>
        <Overview data={data} />
        {/* <StorageList storage={data.storage} /> */}
      </div>
    </div>
  );
}

export default App;
