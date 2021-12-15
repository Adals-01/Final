import BasketItem from "./basketItem";

import "react-step-progress/dist/index.css";
import StepOne from "./stepone";
import StepTwo from "./steptwo.jsx";
import StepThree from "./stepthree.jsx";
import React, { useState } from "react";

/* PROGRESS BAR */
export default function Checkout(props) {

  const [currentActive, setCurrentActive] = useState(0)
  const [styleNext, setStyleNext] = useState(`translateX(calc(( ${currentActive}) * -33.3%`);

  const GoNext = () => {
    const newCurrentActive = currentActive + 1;
    setCurrentActive(newCurrentActive);
    setStyleNext(`translateX(calc(( ${newCurrentActive}) * -33.3% )`);

  }
  
  function Circle(props) {
    if (currentActive >= (props.nr - 1)) {
      return  <div  className="circle active">{props.nr}</div>;
    }
    return <div  className="circle">1</div>;
  }



  
  
  return (
    <div className="checkout">
      
      <div className="progress-placement">
        <div className="progress-container">
          <div className="circle-container">
            <Circle nr={1}/>
          </div>
          <div className="circle-container">
            <Circle nr={2}/>
          </div>
          <div className="circle-container">
            <Circle nr={3}/>
          </div>
        </div>
      </div>
      <div className="mask">
        <section style = {{transform:styleNext}} className="steps">
          <StepOne countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} products={props.products} MyBasket={props.MyBasket} />
          <StepTwo countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} products={props.products} MyBasket={props.MyBasket} />
          <StepThree/>
        </section>
      </div>
      <button id="next" onClick={GoNext}>
        NEXT
      </button>
    </div>
  );
}

