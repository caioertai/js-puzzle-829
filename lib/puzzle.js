// todo
const hintButton = document.querySelector("#show-hint");
const hintBox = document.querySelector(".hint");
const tiles = document.querySelectorAll("td");

hintButton.addEventListener("click", (event) => {
  event.currentTarget.style.display = "none";
  hintBox.style.opacity = 1;
})

const swapTile = (tile) => {
  const currentEmpty = document.querySelector("td.empty");
  currentEmpty.innerText = tile.innerText;
  currentEmpty.classList.remove('empty');
  tile.innerText = "";
  tile.classList.add("empty");
};

const tileCoordinates = (tile) => {
  const coordX = tile.cellIndex;
  const coordY = tile.parentElement.rowIndex;

  const coords = {x: coordX, y: coordY};
  return coords
}

const isValidMove = (tile) => {
  const tileCoords = tileCoordinates(tile)
  const currentEmpty = document.querySelector("td.empty");
  const emptyCoords =  tileCoordinates(currentEmpty);

  const isSameColumn = tileCoords.x === emptyCoords.x;
  const isSameRow = tileCoords.y === emptyCoords.y;

  const isYAdjacent = tileCoords.y - 1 === emptyCoords.y || tileCoords.y + 1 === emptyCoords.y;
  const isXAdjacent = tileCoords.x - 1 === emptyCoords.x || tileCoords.x + 1 === emptyCoords.x;

  return isXAdjacent && isSameRow || isYAdjacent && isSameColumn;
}

tiles.forEach((tile)=> {
  tile.addEventListener("click",(event)=> {
    const currentTile = event.currentTarget;
    if (isValidMove(currentTile)) swapTile(currentTile);
  })
})
