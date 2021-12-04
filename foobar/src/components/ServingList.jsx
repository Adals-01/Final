import ServingItem from "./ServingItem";

export default function ServingList(props) {
  const servingArr = props.serving.map((serving, index) => <ServingItem key={index} {...serving} />);
  return <section className="queue-list">{servingArr}</section>;
}
