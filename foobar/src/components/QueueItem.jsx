import GetTime from "./GetTime";

export default function QueueItem(props) {
  /*  const queueItemArr = props.order.map((order, index) => <QueueItemOrder key={index} order={order} />); */
  return (
    <div className="queue-item">
      <h3>#{props.id}</h3>
      {/*    <div>{queueItemArr}</div> */}
      <div className="dateTime">
        <GetTime starttime={props.startTime} />
      </div>
      {props.order.map((order, index) => (
        <li key={index}>{order}</li>
      ))}
    </div>
  );
}
