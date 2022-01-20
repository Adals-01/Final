import React from "react";
import getImageByKey from "./getImageByKey";
import PlusMinus from "./plusminus";
import StorageItem from "./amount";
// import React, { useState, useEffect } from "react";

// const [arrayx, setArrayx] = UseState([]);



export default function Beerlistitem(props) {
  const taps = props.taps;
  console.log("taps" + taps)
  const beer = props.name;
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
<<<<<<< HEAD
 
  const alc = props.alc;
  let price = [alc].toString().split(".").join("")*10;
=======

  // function amount(myArray) {
  //   let extractedArray = [];
  //   for (let i = 0; i < myArray.length; i++) {
  //     extractedArray.push(myArray[i]);
  //   }
  //   console.log("this is" + extractedArray);
  // }

  function Price() {
    let storage = props.dashboard;

    //amount(JSON.parse(storage));
    // finding highest amount number in storage
    // let amountArr = [];

    // let arr = [];

    // console.log(amountArr);

    // console.log(highinstock);
    // const storageArr = storage.map((product, index) => <StorageItem {...product} key={index} dashboard={props.dashboard} />);

    // function iterate(item) {
    //   let amountArr = storage.map((item) => item.amount);
    //   const highinstock = Math.max(...amountArr);
    //   if (item.amount === highinstock) {
    //     console.log(item.name + "+" + highinstock);
    //     let newprice = `${price}` / 10;
    //     return newprice;
    //   }
    //   return highinstock;
    // }
    // storage.forEach(iterate);
    //creating price
    const beer = props.name;
    if (beer === "El Hefe" || beer === "Hollaback Lager" || beer === "Hoppily Ever After" || beer === "Mowintime" || beer === "Row 26" || beer === "Steampunk") {
      let price = 65;

      return <p>{price}</p>;
    } else if (beer === "Fairy Tale Ale" || beer === "GitHop" || beer === "Ruined Childhood" || beer === "Sleighride") {
      let price = 75;
      return <p>{price}</p>;
    }
  }
>>>>>>> 62dc24bc9b5812b96f14acd17ecf8808dca8d124

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
          <Price />
          <PlusMinus {...props} />
        </div>
      </div>
    </div>
  );
}
