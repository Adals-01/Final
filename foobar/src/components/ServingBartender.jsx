
import Bartender from "./Bartender";

export default function ServingBartender(props) {
  const servingBartenderArr = props.bartenders.map((bartenders) => <Bartender key={props.id} {...bartenders} />);
  return <section>{servingBartenderArr}</section>;
}