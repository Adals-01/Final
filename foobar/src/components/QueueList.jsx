import QueueItem from "./QueueItem";

export default function QueueList(props) {
  const queueArr = props.queue.map((queue, index) => <QueueItem key={index} {...queue} />);
  return <section className="queue-list">{queueArr}</section>;
}
