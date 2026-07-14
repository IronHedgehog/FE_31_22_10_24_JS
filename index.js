import Game from "./game.js";
import { createPlayer } from "./player.js";

const player = createPlayer();
const game = new Game("Мапа", "gold", "goblin");
console.log(game.createGame());

function attack() {
  console.log(`${playerName} attacks`);
}

function heal() {
  console.log(`${playerName} heals`);
}

function buySword() {
  console.log(`${playerName} bought sword`);
}

function buyPotion() {
  console.log(`${playerName} bought potion`);
}

function saveGame() {
  console.log("Saved");
}
