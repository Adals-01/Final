import React from "react";
import getImageByKey from "./getImageByKey";
import PlusMinus from "./plusminus";



export default function Beerlistitem(props) {
  const taps = props.taps;
  console.log("taps" + taps)
  const beer = props.name;
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
 
  const alc = props.alc;
  let price = [alc].toString().split(".").join("")*10;

  let removeVariable = props.description.overallImpression.replace("Variable.", "");
  //Get first sentence (split at ".")
  let description = removeVariable.split(".", 1)[0];
 
  console.log(props.name);
  /* console.log(props.taps.beer); */
  function OutOfStock() {
    if (props.name === props.taps.beer) {
      return <div>{props.name} + {props.taps.beer}</div>;
    } else {
      return <p> IT DOESNT WORK :(</p>;
    }
  }

  return (
    
    <div className="beerListItem">
      <OutOfStock/>
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
