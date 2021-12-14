import BasketItem from "./basketItem";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Introduction from "./intro";

export default function Checkout(props) {
  const user_steps = [
    {
      label: "Introduction",
      name: "step 1",
      content: <Introduction MyBasket={props.MyBasket} />,
    },
    {
      label: "Register and Upload",
      name: "step 2",
      content: <h1>Hello</h1>,
      // validator: step2Validator
    },
    {
      label: "Go Annotating",
      name: "step 3",
      content: <h1>Hello</h1>,
    },
  ];
  console.log(props.MyBasket);
  return (
    <div className="checkout">
      <StepProgressBar MyBasket={props.MyBasket} startingStep={0} steps={user_steps} submitBtnName="Go to annotator!" />
    </div>
  );
}
