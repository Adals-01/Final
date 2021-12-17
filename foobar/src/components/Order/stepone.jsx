import BasketItem from "./basketItem";
export default function StepOne(props) {
  const initialValue = 0;
  let sum = props.MyBasket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);
  const newsum = Math.round((sum*10) * 100) / 100
  



  const noDublicates = [...new Map(props.MyBasket.map((item) => [item.name, item])).values()];
  let basketItemsArr = noDublicates.map((MyBasket, index) => <BasketItem countTypeInBasket={props.countTypeInBasket} {...MyBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} key={index} />);

  return (
    <div className="basket-wrapper form-container">
      <div>
        {Array.isArray(basketItemsArr) && basketItemsArr.length === 0 ? <h2>There is nothing in the cart yet...</h2> : <h2>Here is what you have chosen:</h2>}
        <div>{basketItemsArr}</div>
      

      </div>
      <div className="bottom-cart">
        <p className="total">TOTAL:</p>
        <p>{newsum}</p>
      </div>
    </div>
  );
}
