import { useEffect, useState } from "react";
import "./app.css";
import { CardsContainer } from "./components/CardsContainer";
import { Control } from "./components/Control";
import { charList } from "./components/CharacterList";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentItemSelection, setCurrentSelection] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isVictorious, setIsVictorious] = useState(1);

  function randomizeItems() {
    const randItems = [];
    for (let index = 0; index < 10; index++) {
      const randomId = Math.floor(Math.random() * 20);
      if (
        !randItems.includes(randItems.find((element) => element.id == randomId))
      ) {
        randItems.push(charList.find((element) => element.id == randomId));
      } else {
        index--;
      }
    }
    if (
      !randItems.every((selectedElement) => {
        selectedItems.includes(selectedElement);
      })
    ) {
      setCurrentSelection(randItems);
    } else {
      randomizeItems();
    }
  }

  useEffect(() => {
    randomizeItems();
  }, []);

  function selectItem(item) {
    if (!selectedItems.includes(item)) {
      setSelectedItems(selectedItems.concat([item]));
      setCurrentScore(currentScore + 1);
      if (currentScore == 20) {
        setIsPlaying(false);
        setIsVictorious(2);
        return;
      }
      randomizeItems();
    } else {
      if (currentScore > topScore) {
        setTopScore(currentScore);
      }
      setIsPlaying(false);
      setIsVictorious(0);
    }
  }

  function restartGame() {
    setSelectedItems([]);
    setCurrentScore(0);
    randomizeItems();
    setIsPlaying(true);
    setIsVictorious(1);
  }

  function displayCardsOrVictory() {
    switch (isVictorious) {
      case 0:
        return (
          <div className="defeat">
            DEFEAT! YOU GOT {currentScore}/20 CARDS RIGHT.
          </div>
        );
      case 2:
        return (
          <div className="victory">VICTORY! YOU GOT THE 20 CARDS RIGHT.</div>
        );
      default:
        return (
          <CardsContainer
            currentItemSelection={currentItemSelection}
            selectItem={selectItem}
          />
        );
    }
  }

  return (
    <main>
      <Control
        currentScore={currentScore}
        topScore={topScore}
        isPlaying={isPlaying}
        restartGame={restartGame}
      />
      {displayCardsOrVictory()}
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
