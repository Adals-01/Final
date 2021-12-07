import GetTime from "./GetTime";
import Peter from "../assets/Peter.jpg";
import Dannie from "../assets/Dannie.jpg";
import Klaus from "../assets/Klaus.jpg";
import Jonas from "../assets/Jonas.jpg";

const images = {
 Peter, 
 Klaus, 
 Dannie, 
 Jonas
};

function getImageByKey(key, i) {
  return images[key];
}


export default function ServingItem(props) {
  /*  const queueItemArr = props.order.map((order, index) => <QueueItemOrder key={index} order={order} />); */
  const order = props.order;

  //Only show 1 if dublicates
  let nodublicates = [];
  nodublicates = order.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });

  //count amount of dublicates
  const counts = {};
  order.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  let beers = nodublicates.map((item, index) => (
    <li key={index} order={props.order}>
      <div className="beer-item">{item}</div>
      <span className="beer-count"> x {counts[item]}</span>
    </li>
  ));

  //bartenders
  const bartendersArr = props.bartenders.map((bartender, index) => <BartenderId key={index} {...bartender} id={props.id} bartenders={props.bartenders} />);
  console.log(bartendersArr);
  console.log(bartendersArr[1].props.name);
  function BartenderId(props) {
    const customerId = props.servingCustomer;
    const bartender = props.name;
    console.log(customerId);
    console.log("customer id" + customerId);
    return (
      <div>
        {(() => {
          if (customerId === props.id) {
            return (<div className = "bartender-img-container">
              <p>{bartender}</p>
            <img className="bartender-img" src={getImageByKey(bartender)} alt={bartender} />
            </div>)
          }
        })()}
      </div>
    );
  }
  return (
    <div className="serving-item">
      <div>{bartendersArr}</div>
      <h3>#{props.id}</h3>
      {/*    <div>{queueItemArr}</div> */}

      {props.startTime && <GetTime starttime={props.startTime} />}

      {beers}
    </div>
  );
}
