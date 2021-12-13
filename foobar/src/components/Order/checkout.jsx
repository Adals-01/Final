import StepProgressBar from "react-step-progress";
import BasketItem from "./basketItem";
import "react-step-progress/dist/index.css";

export default function Checkout(props) {
 
  //remove duplicate objects items in MyBasket
  

  function step1Content() { 
     const initialValue = 0;
     console.log(props.MyBasket);
  let sum = props.MyBasket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);
  const noDublicates = [...new Map(props.MyBasket.map((v) => [v.name, v])).values()];
  const basketItemsArr = noDublicates.map((MyBasket, index) => <BasketItem countTypeInBasket={props.countTypeInBasket} {...MyBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} key={index} />);
    console.log("hello")
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

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
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
        stepClass="step"
        steps={[
          { label: "", 
          name: "Briefing", 
          content: step1Content()  },
          {
            label: "",
            name: "Image-Acquisition",
            content: step2Content,
          },
          {
            label: "",
            name: "Image Processing",
            content: step3Content,
            validator: step2Validator,
          },
        ]}
      />
    </div>
  );
}
