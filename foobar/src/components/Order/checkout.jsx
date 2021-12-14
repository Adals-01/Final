import BasketItem from "./basketItem";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import StepOne from "./stepone";
import StepTwo from "./steptwo.jsx";

export default function Checkout(props) {
  
  console.log(props.MyBasket);
  return (
    <div className="checkout">
      <StepOne countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} products={props.products} MyBasket={props.MyBasket} />
      <StepTwo countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} products={props.products} MyBasket={props.MyBasket}/>
    </div>
  );
}
