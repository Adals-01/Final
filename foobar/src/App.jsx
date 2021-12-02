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
    }, 5000);
    fetchItems();
    return () => clearInterval(id);
  }, []);

  function Overview(props) {
    
    return (
      <section>
        <div>Hello</div>
      <p> time: {props.data.timestamp}</p> 

     <h1>Hello {props.data.bar && props.data.bar.name} </h1>
        <p> Tap: {props.data.storage && props.data.storage[0].name}</p>
      </section>
    );
  }

  function StorageList(props) {

  console.log(props.storage);
  const storageArr = props.storages.map((storage, index) => <StorageItem key={index} {...storage} />); 
  return  (
    <section>
     {storageArr}
      </section>
  )}

function StorageItem(props) {
  return (
    <div>
    <h2>{props.name}</h2>
    <p>{props.amount}</p>
    </div>
  )
}
  function TapList(props) {
  console.log(props.taps);
  const tapArr = props.taps.map((tap) => <TapItem key={tap.id} {...tap} />); 
  return  (
    <section>
     {tapArr}
      </section>
  )}

function TapItem(props) {
  return (
    <div>
    <h2>{props.beer}</h2>
    <p>{props.level}</p>
    <p>{props.capacity}</p>
    </div>
  )
}

  function QueueList(props) {
  const queueArr = props.queue.map((queue, index) => <QueueItem key={index} {...queue} />); 
  return  (
    <section>
     {queueArr}
      </section>
  )}

function QueueItem(props) {
  /*  const queueItemArr = props.order.map((order, index) => <QueueItemOrder key={index} order={order} />); */
  return (
    <div>
    <h2>#{props.id}</h2>
{/*    <div>{queueItemArr}</div> */}
  {props.order.map((order, index) => <div key={index}>{order}</div>)} 
    </div>
  )
}




 
  return (
    <div className="App">
      <div>
      <Overview data={data} />
        {data.storage && <StorageList storages={data.storage} /> }
      {data.taps && <TapList taps={data.taps} /> }
      {data.queue && <QueueList queue={data.queue} /> }
      </div>
    </div>
  );
}

export default App;
