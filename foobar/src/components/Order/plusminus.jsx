import React, { useState } from "react";

export default function PlusMinus(props) {
let alcohol;
let initialCount;

if (!!props.alc) {
     alcohol = props.alc;
     initialCount = 0 
} else {
     alcohol = props.price;
     initialCount = props.countItems; 
     }


const [count, setCount] = useState(initialCount);
let price = alcohol.toString().split(".").join("");

function plus() {
 setCount((prevCount) => prevCount + 1); 
 props.addToBasket({
    countItems: count ,
    price: alcohol,
    name: props.name,
  }); 
  
}

function minus() {
    setCount((prevCount) => prevCount - 1); 
    if (prevCount > 0) {
      return prevCount - 1;
    } 
      props.removeFromBasket({
        countItems: count,
        price: alcohol,
        name: props.name,
      })
      if (prevCount <= 0) 
      return 0;  
    

     
  }
  
function minus() {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return 0;
    });
    
      props.removeFromBasket({
        countItems: count - 1,
        price: alcohol,
        name: props.name,
      });       
  }


  function CountPlusMinus() {
    if (initialCount === 0) {
      return count;
    }
    else {
      return initialCount + count;
    }
  }

return (
    <>
    <div>
          <p>{props.alcohol}% alc</p>
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
        <div className="plus-minus-btn"><CountPlusMinus/></div>
        <button className="circleButton" onClick={plus}>+</button>
        </div>
        </>
)
}
