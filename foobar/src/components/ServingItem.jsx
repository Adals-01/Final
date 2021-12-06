import GetTime from "./GetTime";

export default function ServingItem(props) {
  /*  const queueItemArr = props.order.map((order, index) => <QueueItemOrder key={index} order={order} />); */
  const order = props.order; 
 
  //Only show 1 if dublicates
  let nodublicates = [];
   nodublicates = order.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
    })

  //count amount of dublicates
  const  counts = {};
  order.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });



  let beers = nodublicates.map((item, index) =>
    <li key={index} order={props.order}><div className="beer-item">{item}</div><span className="beer-count"> x {counts[item]}</span></li> 
    );



  return (
    <div className="serving-item">
      <h3>#{props.id}</h3>
      {/*    <div>{queueItemArr}</div> */}
  
      {props.startTime && <GetTime starttime={props.startTime} />}

   {beers}
    </div>
  );
}
