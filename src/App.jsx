import { useState } from "react";
import "./app.css";
import { CardsContainer } from "./components/CardsContainer";
import { Control } from "./components/Control";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentItemSelection, changeCurrentSelection] = useState([]);
  const items = [];

  for (let index = 0; index < 20; index++) {
    items.push(index);
  }

  const selectedItems = [];

  function selectItem(item) {
    selectedItems.push(item);
  }

  return (
    <main>
      <Control
        currentScore={currentScore}
        topScore={topScore}
        setTopScore={setTopScore}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <CardsContainer
        items={items}
        currentItemSelection={currentItemSelection}
        changeCurrentSelection={changeCurrentSelection}
        selectItem={selectItem}
        setCurrentScore={setCurrentScore}
      />
    </main>
  );
}

export default App;

export function Header() {
  return <header>MEMORY CARD GAME</header>;
}

export function Footer() {
  return (
    <footer>
      Created by&nbsp;<a href="https://github.com/Goik28">Goik28</a>&nbsp;for
      the Memory Card game project on The Odin Project course
    </footer>
  );
}
