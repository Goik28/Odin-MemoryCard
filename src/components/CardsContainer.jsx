import { useEffect } from "react";
import { Card } from "./Card";
import "./cardContainer.css";

export function CardsContainer({ currentRandomSelection, selectItem }) {
  function createCardsList() {
    return currentRandomSelection.map((element) => {
      return <Card key={element.id} item={element} selectItem={selectItem} />;
    });
  }

  return <ul className="cardContainer">{createCardsList()}</ul>;
}
