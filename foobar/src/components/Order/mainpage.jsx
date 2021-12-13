import Beerlist from "./beerlist";
import Basket from "./basket";
import React, { useState } from "react";

export default function Mainpage(props) {
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }
  
function removeFromBasket(product) {
    setBasket(function (oldBasket) {
        const index = oldBasket.findIndex(product => product === product);
        const newData = [
            ...oldBasket.slice(0, index),
            ...oldBasket.slice(index + 1)]
            return newData
        })
        }

 function countTypeInBasket(product) {
    const findDuplicates= basket.map((item) => item.name === product);
    const counts = findDuplicates.filter(Boolean).length;
    return counts
  }
           

  return (
      <main>
        <Beerlist countTypeInBasket={countTypeInBasket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} products={products} data={props.data}/>
        <Basket countTypeInBasket={countTypeInBasket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} products={products} MyBasket={basket}/>
      </main>
    );
  }
  