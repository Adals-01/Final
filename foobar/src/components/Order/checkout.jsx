import BasketItem from "./basketItem";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";


function Introduction(props) {
  const initialValue = 0;
  console.log(props);
  /* let sum = props.MyBasket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);
  const noDublicates = [...new Map(props.MyBasket.map((v) => [v.name, v])).values()];
  let basketItemsArr = noDublicates.map((MyBasket, index) => <BasketItem countTypeInBasket={props.countTypeInBasket} {...MyBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} key={index} />);
    console.log(basketItemsArr)  */
  return (
    <div className="basket-wrapper">
    {/*   <div>
       <h2>Here is what you have chosen:</h2>
        <div>{basketItemsArr}</div>
        <p> {props.MyBasket.length}  items</p>
      </div> */}
      <div className="bottom-cart">
        <p className="total">Total:</p> 
        <div>
         {/*  <p>{props.MyBasket.length * sum} DKK</p> */}
        </div>
      </div>
    </div>
  )
}


export default function Checkout(props) {
  const user_steps = [
    {
      label: 'Introduction',
      name: 'step 1',
      content: <Introduction MyBasket={props.MyBasket}/>
    },
    {
      label: 'Register and Upload',
      name: 'step 2',
      content: <h1>Hello</h1>,
      // validator: step2Validator
    },
    {
      label: 'Go Annotating',
      name: 'step 3',
      content: <h1>Hello</h1>,
    
    }
  ]
  console.log(props.MyBasket);
  return (
    <div className="checkout" >
        <StepProgressBar MyBasket={props.MyBasket}
          startingStep={0}
          steps={user_steps}
          submitBtnName="Go to annotator!"
        />
    </div>
  );
}

