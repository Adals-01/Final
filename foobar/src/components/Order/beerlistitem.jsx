import React, { useState } from "react";
import getImageByKey from "./getImageByKey";
import PlusMinus from "./plusminus";

export default function Beerlistitem(props) {
  const beer = props.name;
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();

  const alc = props.alc;
  let price = [alc].toString().split(".").join("")*10;


  let removeVariable  = props.description.overallImpression.replace('Variable.','');
  //Get first sentence (split at ".")
  let description = removeVariable.split('\.', 1)[0];
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
        <p className="beer-item-description">{description}</p>
        <p>{props.alc}% alc</p>

        <div>
          {(() => {
            if (price.length === 1) {
              return <p>{props}0 DKK</p>;
            } else {
              return <p>{price} DKK</p>;
            }
          })()}
          <PlusMinus {...props} />
        </div>
      </div>
    </div>
  );
}
