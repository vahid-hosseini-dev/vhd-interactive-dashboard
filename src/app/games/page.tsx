async function getGamesList() {
  const res = await fetch("https://api.rawg.io/api/games");
  return res.json();
}

function Game() {
  const data = getGamesList();
  console.log(data);

  return data;
}

export default Game;
