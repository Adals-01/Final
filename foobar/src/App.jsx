import React, { useState, useEffect } from "react";
import "./App.scss";
import keg from './assets/keg-icon.svg';
import logo from './assets/foobar-logo.svg';
import elhefe from './assets/elhefe.png';
import fairytaleale from './assets/fairytaleale.png';
import githop from './assets/githop.png';
import hollaback from './assets/hollaback.png';
import hoppilyeverafter from './assets/hoppilyeverafter.png';
import mowintime from './assets/mowintime.png';
import row26 from './assets/row26.png';
import ruinedchildhood from './assets/ruinedchildhood.png';
import sleighride from './assets/sleighride.png';
import steampunk from './assets/steampunk.png';



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
      <section className="overview">
        {/* <p> time: {props.data.timestamp}</p> */}

        <h1>Good Evening, {props.data.bar && props.data.bar.name} Team!</h1>
        <div className="stats">
          <div className="statsItem">
            <div className="statNumber">?</div>
            <p> Orders Completed </p>
          </div>
          <div className="statsItem">
            <div className="statNumber">{props.data.queue && props.data.queue.length}</div>
            <p> Orders in Line</p>
          </div>
          <div className="statsItem">
            <div className="statNumber">{props.data.taps && props.data.taps.length}</div>
            <p> Beers on Tap </p>
          </div>
        </div>
      </section>
    );
  }

  function StorageList(props) {
    const storageArr = props.storages.map((storage, index) => <StorageItem key={index} {...storage} />);
    return <section className="storage-list">{storageArr}</section>;
  }


function StorageItem(props) {
  return (

    <div className="storage-item">
      <div className="slanted-text-container">
        <h3>{props.name}</h3>
      </div>
    <div className="keg-container">
      <img className="keg-icon"  src={keg} alt={'keg-icon'}/>
      <p className="keg-amount">{props.amount}</p>
    </div>
    </div>
  )
}
  function TapList(props) {
    
    console.log(props.taps);
    const tapArr = props.taps.map((tap) => <TapItem key={tap.id} {...tap} />);
    return <section className="tap-list">{tapArr}</section>;
  }

  function TapItem(props) {
    const beer = props.beer;
    let beerimg = beer.replace(/\s+/g, '').toLowerCase(); 
    console.log(beerimg);
    return (
      <div className="tap-item">
        <img className="beer-label"  src={elhefe} alt={beerimg}/>
        <h3>{props.beer}</h3>
        <p>{props.level}</p>
        <p>{props.capacity}</p>
      </div>
    );
  }

  function QueueList(props) {
    const queueArr = props.queue.map((queue, index) => <QueueItem key={index} {...queue} />);
    return <section className="queue-list">{queueArr}</section>;
  }

  function QueueItem(props) {
    /*  const queueItemArr = props.order.map((order, index) => <QueueItemOrder key={index} order={order} />); */
    return (
      <div className="queue-item">
        <h3>#{props.id}</h3>
        {/*    <div>{queueItemArr}</div> */}
        <div className="dateTime">
          <p>{props.startTime}</p>
        </div>
        {props.order.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </div>
    );
  }
  function ServingList(props) {
    const servingArr = props.serving.map((serving, index) => <ServingItem key={index} {...serving} />);
    return <section className="queue-list">{servingArr}</section>;
  }

  function ServingItem(props) {
    /*  const queueItemArr = props.order.map((order, index) => <QueueItemOrder key={index} order={order} />); */
    return (
      <div className="serving-item">
        <h3>#{props.id}</h3>
        {/*    <div>{queueItemArr}</div> */}
        <div className="dateTime">
          <p>{props.startTime}</p>
        </div>

        {props.order.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <main>
        <aside>{data.taps && <TapList taps={data.taps} />}</aside>
        <div className="right-side">
          <div className="overview-logo">
            <Overview data={data} />
            <img className="foobar-logo"  src={logo} alt={'foobar-logo'}/>
          </div>
          <div className="serving-and-queue">
            {data.serving && <ServingList serving={data.serving} />}
            {data.queue && <QueueList queue={data.queue} />}
          </div>
          {data.storage && <StorageList storages={data.storage} />}
        </div>
      </main>
    </div>
  );
}

export default App;
