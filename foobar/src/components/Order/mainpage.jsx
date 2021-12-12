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
    console.log("remove")
            setBasket(oldBasket => oldBasket.filter((_, i) => i !== product));
        
        // remove item
  }

  

    return (
      <main>
        <Beerlist  addToBasket={addToBasket} removeFromBasket={removeFromBasket} products={products} data={props.data}/>
        <Basket addToBasket={addToBasket} removeFromBasket={removeFromBasket} products={products} MyBasket={basket}/>
      </main>
    );
  }
  