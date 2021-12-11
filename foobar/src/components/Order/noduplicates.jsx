export default function NoDuplicates() {

const thisBasket = props.MyBasket;

  //Only show 1 if dublicates
  let nodublicates = [];
  nodublicates = thisBasket.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });

  //count amount of dublicates
  const counts = {};
  thisBasket.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  let beers = nodublicates.map((item, index) => (
    <li key={index} {...MyBasket}>
      <div className="beer-item">{item}</div>
      <span className="beer-count"> x {counts[item]}</span>
    </li>
  ));

  return (
    <div className="queue-item ">
      {beers}
    </div>
  );
}
  