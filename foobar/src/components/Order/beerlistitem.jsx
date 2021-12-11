import React, { useState } from "react";
import getImageByKey from "./getImageByKey";

export default function Beerlistitem(props) {
  const beer = props.name;
  const alc = props.alc;

  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
  let price = alc.toString().split(".").join("");

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  function plus() {
    setCount((prevCount) => prevCount + 1);
   props.addToBasket({
      count: count + 1,
      price: props.alc,
      name: props.name,
    }); 
  }
  function minus() {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="beerListItem">
      <div className="leftSide">
        <img className="beerLabel" src={getImageByKey(beerimg)} alt={beerimg} />
      </div>
      <div className="rightSide">
        <h3>{props.name}</h3>
        <p>{props.description.overallImpression}</p>

        <div>
          <p>{props.alc}% alc</p>
          {(() => {
            if (price.length === 1) {
              return <p>{price}0 DKK</p>;
            } else {
              return <p>{price} DKK</p>;
            }
          })()}
        </div>
        <div className="addContainer">
        <button className="circleButton" onClick={minus}>-</button>
        <div className="plus-minus-btn">{count}</div>
        <button className="circleButton" onClick={plus}>+</button>
        </div>
      </div>
    </div>
  );
}
