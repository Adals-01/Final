import React, { useState, useEffect } from "react";

import elhefe from "../../assets/elhefe.png";
import fairytaleale from "../../assets/fairytaleale.png";
import githop from "../../assets/githop.png";
import hollabacklager from "../../assets/hollaback.png";
import hoppilyeverafter from "../../assets/hoppilyeverafter.png";
import mowintime from "../../assets/mowintime.png";
import row26 from "../../assets/row26.png";
import ruinedchildhood from "../../assets/ruinedchildhood.png";
import sleighride from "../../assets/sleighride.png";
import steampunk from "../../assets/steampunk.png";

const images = {
  elhefe,
  fairytaleale,
  githop,
  hollabacklager,
  hoppilyeverafter,
  mowintime,
  row26,
  ruinedchildhood,
  sleighride,
  steampunk,
};

function getImageByKey(key) {
  return images[key];
}
function addToBasket(product) {
  setBasket(function (oldBasket) {
    const nextState = oldBasket.concat(product);
    return nextState;
  });
}

export default function Beerlistitem(props) {
  const beer = props.name;
  const alc = props.alc;

  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
  let price = alc.toString().split(".").join("");

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [basket, setBasket] = useState([]);
  return (
    <div className="beerListItem">
      <div className="leftSide">
        <img className="beerLabel" src={getImageByKey(beerimg)} alt={beerimg} />
      </div>
      <div className="rightSide">
        <h3>{props.name}</h3>
        <p>{props.description.overallImpression}</p>
        <p>{props.alc}% alc</p>
        {(() => {
          if (price.length === 1) {
            return <p>{price}0 DKK</p>;
          } else {
            return <p>{price} DKK</p>;
          }
        })()}
        <div className="addContainer">
          <button
            onClick={(e) => {
              if (count > 0) {
                setCount((prevCount) => prevCount - 1);
              }
            }}
          >
            -
          </button>
          <p>{count}</p>

          <button
            onClick={(e) => {
              setCount((prevCount) => prevCount + 1);
              props.addToBasket({
                price: props.price,
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
