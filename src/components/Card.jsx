import "./card.css";

export function Card({ item, selectItem }) {

    function selectItemHandler(e){
        e.preventDefault();
        selectItem(item)
    }

  return (
    <div className="card" onClick={selectItemHandler}>
      <img src={item.img} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
}
