import ServingItem from "./ServingItem";
import FlipMove from 'react-flip-move';

export default function ServingList(props) {
  const servingArr = props.serving.map((serving, index) => <ServingItem key={index} {...serving} bartenders={props.bartenders}/>);
  return <FlipMove  appearAnimation="fade" enterAnimation="accordionHorizontal" leaveAnimation="accordionHorizontal" className="queue-list" typeName="section">{servingArr}</FlipMove>;
}
