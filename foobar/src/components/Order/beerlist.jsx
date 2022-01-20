import Beerlistitem from "./beerlistitem";

<<<<<<< HEAD
 export default function Beerlist(props) {
   console.log(props.dashboard + "hello")
  const beerArr = props.data.map((product, index) => <Beerlistitem countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} {...product} key={index} taps={props.dashboard.taps} />);
=======
export default function Beerlist(props) {
  console.log(props.dashboard.taps);
  const beerArr = props.data.map((product, index) => <Beerlistitem countTypeInBasket={props.countTypeInBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} {...product} key={index} dashboard={props.dashboard.storage} />);
>>>>>>> 62dc24bc9b5812b96f14acd17ecf8808dca8d124
  return (
    <div className="Home">
      <main>
        <section className="beerlist-wrapper">{beerArr}</section>
      </main>
    </div>
  );
}
