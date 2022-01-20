import React from "react";
import getImageByKey from "./getImageByKey";
import PlusMinus from "./plusminus";
import StorageItem from "./amount";


export default function Beerlistitem(props) {
  const beer = props.name;
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();

  const tapArr = props.taps.map((taps) => taps.beer);


  function OnTap() {
    console.log(tapArr.includes(beer));
    if (tapArr.includes(beer)) {
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
              <Price />
              <PlusMinus {...props} />
            </div>
          </div>
        </div>
      );
    } else {
      return <p className="noShow"></p>
    }
  }

  function Price() {
    let storage = props.dashboard;
    const beer = props.name;
    if (beer === "El Hefe" || beer === "Hollaback Lager" || beer === "Hoppily Ever After" || beer === "Mowintime" || beer === "Row 26" || beer === "Steampunk") {
      let price = 65;

      return <p>{price} DKK</p>;
    } else if (beer === "Fairy Tale Ale" || beer === "GitHop" || beer === "Ruined Childhood" || beer === "Sleighride") {
      let price = 75;
      return <p>{price} DKK</p>;
    }
  }

  let removeVariable = props.description.overallImpression.replace("Variable.", "");
  //Get first sentence (split at ".")
  let description = removeVariable.split(".", 1)[0];

  return (
    <div>
      <OnTap/>
    </div>
  );
}
