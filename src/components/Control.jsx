export function Control({ currentScore, topScore, isPlaying, restartGame }) {
  function startGameHandler(e) {
    e.preventDefault();
    restartGame();
  }

  return (
    <div>
      <p>
        How to play: Click on a card to gain a point. You lose when you repeat a
        card.
      </p>
      <div>
        <button disabled={isPlaying} onClick={startGameHandler}>
          Restart Game
        </button>
        <p>Your score: {currentScore}</p>
        <p>Best score: {topScore}</p>
      </div>
    </div>
  );
}
