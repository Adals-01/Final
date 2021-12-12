import React, { useState } from "react";
import getImageByKey from "./getImageByKey";
import PlusMinus from "./plusminus";


export default function BasketItem(props) {
    let beerimg = props.name.replace(/\s+/g, "").toLowerCase();
   /*  let price = alc.toString().split(".").join(""); */

return  (
    <section className="basketItem">
        <img className="beerLabel" src={getImageByKey(beerimg)} alt={beerimg} />
    <p>{props.name}<span> x {props.count}</span></p>
    <p>{props.price} DKK</p>
    <PlusMinus  {...props}/> 
    </section>
    )
 }
