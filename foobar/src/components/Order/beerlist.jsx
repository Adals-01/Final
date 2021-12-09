import Beerlistitem from "./beerlistitem";

export default function Beerlist(props) {
  const beerArr = props.data.map((beerlist, index) => <Beerlistitem key={index} {...beerlist} />);
  return (
    <div className="Home">
      <main>
        <section>{beerArr}</section>
      </main>
    </div>
  );
}
