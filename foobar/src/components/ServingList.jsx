import ServingItem from "./ServingItem";
import FlipMove from 'react-flip-move';

export default function ServingList (props) {
  const servingArr = props.serving.map((serving, index) => <ServingItem key={index} {...serving} bartenders={props.bartenders}/>);
  return <FlipMove style={{ overflowAnchor: 'none' }}
  maintainContainerHeight="true"
  appearAnimation="fade"
   enterAnimation="fade"
    leaveAnimation="fade"
     className="queue-list"
      typeName="section"
      >{servingArr}</FlipMove>;

}
