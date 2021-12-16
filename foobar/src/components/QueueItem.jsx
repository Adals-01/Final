import GetTime from "./GetTime";
import React, { forwardRef } from "react";

const QueueItem = forwardRef((props, ref) => {
  const order = props.order;

  //Only show 1 if dublicates
  let nodublicates = [];
  nodublicates = order.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });

  //count amount of dublicates
  const counts = {};
  order.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  let beers = nodublicates.map((item, index) => (
    <li key={index} order={props.order}>
      <div className="beer-item">{item}</div>
      <span className="beer-count"> x {counts[item]}</span>
    </li>
  ));

  return (
    <div ref={ref} className="queue-item ">
      <h3>#{props.id}</h3>
      <GetTime starttime={props.startTime} />
      {beers}
    </div>
  );
});
export default QueueItem;
