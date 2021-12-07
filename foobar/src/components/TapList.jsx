import TapItem from "./TapItem";

export default function TapList(props) {
  const tapArr = props.taps.map((tap) => <TapItem key={tap.id} {...tap} />);
  return <section className="tap-list">{tapArr}</section>;
}
