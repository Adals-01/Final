import GetTime from "./GetTime";
export default function ServingItem(props) {
  /*  const queueItemArr = props.order.map((order, index) => <QueueItemOrder key={index} order={order} />); */
  return (
    <div className="serving-item">
      <h3>#{props.id}</h3>
      {/*    <div>{queueItemArr}</div> */}

      {props.startTime && <GetTime starttime={props.startTime} />}

      {props.order.map((order, index) => (
        <li key={index}>{order}</li>
      ))}
    </div>
  );
}
