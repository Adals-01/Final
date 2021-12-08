import Bartender from "./Bartender";

export default function ServingBartender(props) {
  const servingBartenderArr = props.bartenders.map((bartenders, index) => <Bartender key={index} servingCustomer={props.servingCustomer} {...bartenders} />);
  return <section className="queue-list">{servingBartenderArr}</section>;
}
