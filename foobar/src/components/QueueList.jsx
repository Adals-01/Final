import QueueItem from "./QueueItem";

export default function QueueList(props) {
  const queueArr = props.queue.map((queue, index) => <QueueItem key={index} {...queue} />);
  // console.log(props.bartenders);
  return <section className="queue-list">{queueArr}</section>;
}
