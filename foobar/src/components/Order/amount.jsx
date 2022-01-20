export default function Price(props) {
  let storage = props.dashboard;
  storage.forEach(iterate);
  const beer = props.name;
  //Dividing beers by prices
  if (beer === "El Hefe" || beer === "Hollaback Lager" || beer === "Hoppily Ever After" || beer === "Mowintime" || beer === "Row 26" || beer === "Steampunk") {
    //creating price
    let price = 65;
    //check if beer is discounted and give it new price
    if (beer === discountedbeer) {
      let discount = price * 0.1;
      let newprice = price - discount;
      isDiscounted = true;
      console.log(newprice);
      return (
        <div>
          <h3>10% Discount</h3>
          <p>{newprice} DKK</p>
        </div>
      );
    } else {
      return <p>{price} DKK</p>;
    }
  } else if (beer === "Fairy Tale Ale" || beer === "GitHop" || beer === "Ruined Childhood" || beer === "Sleighride") {
    //creating price
    let price = 75;
    //check if beer is discounted and give it new price
    if (beer === discountedbeer) {
      let discount = price * 0.1;
      let newprice = price - discount;
      isDiscounted = true;
      return (
        <div>
          <h3>10% Discount</h3>
          <p>{newprice} DKK</p>
        </div>
      );
    }
    return <p>{price} DKK</p>;
  }
}
//create array of item amounts to filter through for highest number
function iterate(props) {
  let storage = props.dashboard;
  let amountArr = storage.map((item) => item.amount);
  const highinstock = Math.max(...amountArr);
  //add beer with highest number in storage to usestate
  if (item.amount === highinstock) {
    const discountedbeer = props.name;
    setDiscountedBeer(discountedbeer);
    return <p>{discountedbeer}</p>;
  }
}
