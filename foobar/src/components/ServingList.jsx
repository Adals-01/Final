import ServingItem from "./ServingItem";
import Bartender from "./Bartender";

export default function ServingList(props) {
  const servingArr = props.serving.map((serving, index) => <ServingItem key={index} {...serving}/>);
  return <section className="queue-list">
    {props.bartenders && <Bartender bartenders={props.bartenders}/>}{servingArr}</section>;
}