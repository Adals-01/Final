import QueueItem from "./QueueItem";
import FlipMove from 'react-flip-move';

export default function QueueList(props) {
  const queueArr = props.queue.map((queue, index) => <QueueItem key={index} {...queue} />);
  return <FlipMove style={{ overflowAnchor: 'none' }}
  maintainContainerHeight="true"
  appearAnimation="fade"
   enterAnimation="fade"
    leaveAnimation="fade"
     className="queue-list"
      typeName="section"
      className="queue-list">{queueArr}</FlipMove>;
}


