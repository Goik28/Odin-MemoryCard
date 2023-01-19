import { useEffect } from "react";
import { Card } from "./Card";
import "./cardContainer.css"

export function CardsContainer({
  currentItemSelection,
  changeCurrentSelection,
  selectItem,
  setCurrentScore,
}) {
  function createCardsList() {
    

    return (currentItemSelection.map((element) => {
      return <Card key={element.id} name={element.name} img={element.img} />;
    }));
  }

  return <ul className="cardContainer">{createCardsList()}</ul>;
}
