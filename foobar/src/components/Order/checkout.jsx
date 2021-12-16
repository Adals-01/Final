import "react-step-progress/dist/index.css";
import StepOne from "./stepone";
import StepTwo from "./steptwo.jsx";
import StepThree from "./stepthree.jsx";
import React, { useState } from "react";
import { useRef } from "react";

/* PROGRESS BAR */
export default function Checkout(props) {
  const [currentActive, setCurrentActive] = useState(0);
  const [styleNext, setStyleNext] = useState(`translateX(calc(( ${currentActive}) * -33.3%`);

  const submit = useRef();


  const GoNext = () => {
    let newCurrentActive = currentActive + 1;
    setCurrentActive(newCurrentActive);
    setStyleNext(`translateX(calc(( ${newCurrentActive}) * -33.3% )`);
  };

  const GoBack = () => {
    let newCurrentActive = currentActive - 1;
    if (currentActive >= 0) {
      setCurrentActive(newCurrentActive);
      setStyleNext(`translateX(calc(( ${newCurrentActive}) * -33.3% )`);
    }
  };

  function Circle(props) {
    if (currentActive >= props.nr - 1) {
      return <div className="circle active">{props.nr}</div>;
    }
    return <div className="circle">{props.nr}</div>;
  }

  const GoSubmit = () => {
    submit.current.click();
    GoNext(); 
  };

  function BackButton() {
    if (currentActive === 0) {
      return <button style={{ visibility: "hidden" }}></button>;
    }
    if (currentActive === 1) {
      return (
        <button id="prev" onClick={GoBack}>
          BACK
        </button>
      );
    } else {
      return <button style={{ visibility: "hidden" }}></button>;
    }
  }
  function NextButton() {
    if (currentActive === 1) {
      return (
        <div  className="submit-button-wrapper">
          <button className="submit ghost-button" onClick={GoSubmit}>CONFIRM PAYMENT</button>
          <button className="submit active"ref={submit}  form="my-form" type="submit">
            CONFIRM PAYMENT
          </button>
        </div>
      );
    }
    if (currentActive === 2) {
      return <button style={{ visibility: "hidden" }}></button>;
    } else {
      return (
        <button id="next" className="active" onClick={GoNext}>
          NEXT
        </button>
      );
    }
  }

  return (
    <div className="">
      <div className="progress-placement">
        <div className="progress-container">
          <div className="progress-bar"></div>
          <div className="circle-container">
            <Circle nr={1} />
          </div>
          <div className="circle-container">
            <Circle nr={2} />
          </div>
          <div className="circle-container">
            <Circle nr={3} />
          </div>
        </div>
      </div>
      <div className="mask">
        <section style={{ transform: styleNext }} className="steps">
          <StepOne countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} products={props.products} MyBasket={props.MyBasket} />
          <StepTwo currentActive={props.newCurrentActive} countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} products={props.products} MyBasket={props.MyBasket} />
          <StepThree />
        </section>
      </div>
      <div className="button-container">
        <BackButton />
        <NextButton />
      </div>
    </div>
  );
}
