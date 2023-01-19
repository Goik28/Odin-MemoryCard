import { Card } from "./Card";

export function CardsContainer(props) {
  function createCardsList() {
    return props.currentItemSelection.map((element) => {
      return <Card key={element.id} name={element.name} img={element.img} />;
    });
  }

  return <ul>{createCardsList()};</ul>;
}
