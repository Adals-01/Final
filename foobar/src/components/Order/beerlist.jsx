import Beerlistitem from "./beerlistitem";

 export default function Beerlist(props) {
  const beerArr = props.data.map((product, index) => <Beerlistitem addToBasket={props.addToBasket} {...product} key={index} />);
  return (
    <div className="Home">
      <main>
        <section>{beerArr}</section>
      </main>
    </div>
  );
}
