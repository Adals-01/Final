import React from "react";
import UniverStep from "./UniverStep";
import OrgStep from "./OrgStep";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import styles from "./step.module.scss";
import StepProgress from "./StepProgress";

const OnboardStep = () => {
  const childArray = [
    { id: 1, content: <UniverStep /> },
    { id: 2, content: <OrgStep /> },
    { id: 3, content: <OrgStep /> },
    { id: 4, content: <OrgStep /> },
    { id: 5, content: <OrgStep /> },
  ];
 
  return (
    <section className={styles.stepPage}>
      <StepProgress childArray={childArray} />
    </section>
  );


  let sum = props.MyBasket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);
  const noDublicates = [...new Map(props.MyBasket.map((v) => [v.name, v])).values()];
  let basketItemsArr = noDublicates.map((MyBasket, index) => <BasketItem countTypeInBasket={props.countTypeInBasket} {...MyBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} key={index} />);
    console.log(basketItemsArr)
  
    return(
    <div className="basket-wrapper">
      <div>
        <h2>Here is what you have chosen:</h2>
        <div>{basketItemsArr}</div>
        <p> {props.MyBasket.length}  items</p>
      </div>
      <div className="bottom-cart">
        <p className="total">Total:</p>
        <div>
         {/*  <p>{props.MyBasket.length * sum} DKK</p> */}
        </div>
      </div>
    </div>
  );}

  const step2Content = <div></div>;
  const step3Content = <h1>this works</h1>;

  return (
    <div className="App">
      <StepProgressBar MyBasket={props.MyBasket} 
        startingStep={0}

        stepClass="step"
        wrapperClass="progress-wrapper-custom"
        secondaryBtnClass="prev"
        primaryBtnClass="next"
        buttonWrapperClass="btn-wrap"
        previousBtnName="Back"
        nextBtnName="Next"
        stepClass="usersteps"
      />
    </div>
  );




export default OnboardStep;