import getImageByKey from "./getImageByKey";
import PlusMinus from "./plusminus";
// import Price from "./amount";
import React, { useState } from "react";

export default function Beerlistitem(props) {
  const [discountedbeer, setDiscountedBeer] = useState([]);
  const beer = props.name;
  let isDiscounted;

  function Price() {
    let storage = props.dashboard;
    storage.forEach(iterate);
    const beer = props.name;
    //Dividing beers by prices
    if (beer === "El Hefe" || beer === "Hollaback Lager" || beer === "Hoppily Ever After" || beer === "Mowintime" || beer === "Row 26" || beer === "Steampunk") {
      //creating price
      let price = 65;
      //check if beer is discounted and give it new price
      if (beer === discountedbeer) {
        let discount = price * 0.1;
        let newprice = price - discount;
        isDiscounted = true;
        console.log(newprice);
        return (
          <div>
            <h3>10% Discount</h3>
            <p>{newprice}0 DKK</p>
          </div>
        );
      } else {
        return <p>{price} DKK</p>;
      }
    } else if (beer === "Fairy Tale Ale" || beer === "GitHop" || beer === "Ruined Childhood" || beer === "Sleighride") {
      //creating price
      let price = 75;
      //check if beer is discounted and give it new price
      if (beer === discountedbeer) {
        let discount = price * 0.1;
        let newprice = price - discount;
        isDiscounted = true;
        return (
          <div>
            <h3>10% Discount</h3>
            <p>{newprice}0 DKK</p>
          </div>
        );
      }
      return <p>{price} DKK</p>;
    }
  }
  //create array of item amounts to filter through for highest number
  function iterate(item) {
    let storage = props.dashboard;
    let amountArr = storage.map((item) => item.amount);
    const highinstock = Math.max(...amountArr);
    //add beer with highest number in storage to usestate
    if (item.amount === highinstock) {
      const discountedbeer = item.name;
      setDiscountedBeer(discountedbeer);
      return <p>{discountedbeer}</p>;
    }
  }
  console.log(discountedbeer);

  //add CSS styling to discounted beer
  if (props.name === discountedbeer) {
    isDiscounted = true;
  } else {
    isDiscounted = false;
  }

  let removeVariable = props.description.overallImpression.replace("Variable.", "");
  let description = removeVariable.split(".", 1)[0];
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
  return (
    <div className="beerListItem" style={{ border: isDiscounted ? "white dashed 1px" : "none" }}>
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
}
