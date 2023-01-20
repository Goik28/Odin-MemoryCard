import { useEffect } from "react";
import { Card } from "./Card";
import "./cardContainer.css";

export function CardsContainer({
  currentItemSelection,
  selectItem,
}) {
  function createCardsList() {
    return currentItemSelection.map((element) => {
      return (
        <Card
          key={element.id}
          item={element}
          selectItem={selectItem}
        />
      );
    });
  }

  return <ul className="cardContainer">{createCardsList()}</ul>;
}
