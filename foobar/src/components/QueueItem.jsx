import GetTime from "./GetTime";

export default function QueueItem(props) {
  const queueItemArr = props.order.map((order, index) => <li key={index} order={order}></li>);
  console.log(props.order); 
  const myArray = props.order;
 
  var result = [];
   result = myArray.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})
 let items = result.map((item, index) =>
 <li key={index} order={props.order}>{item} {result.length} </li> 
);


  return (
    <div className="queue-item">
      <h3>#{props.id}</h3>
      {/*    <div>{queueItemArr}</div> */}
      <div className="dateTime">
        <GetTime starttime={props.startTime} />
      </div>
      {}
      <p>No dublicates</p>
      {items}
    </div>
  );
}
