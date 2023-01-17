import "./app.css";
import { CardsContainer } from "./components/CardsContainer";
import { Control } from "./components/Control";

function App() {
  return (
    <main>
      <Control />
      <CardsContainer />
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
