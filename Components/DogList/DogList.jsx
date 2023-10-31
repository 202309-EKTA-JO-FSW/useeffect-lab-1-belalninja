export default function ShoppingList({ dogsList = [] }) {
  const listing = dogsList.map((dog, index) => (
    <img src={dog} alt="" key={index} />
  ));
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs
        <span role="img">🐶</span>
      </h3>
      {listing}
    </div>
  );
}
