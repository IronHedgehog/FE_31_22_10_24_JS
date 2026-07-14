// default export

export default class Game {
  constructor(map, treasures, enemy) {
    this.map = map;
    this.treasures = treasures;
    this.enemy = enemy;
  }

  createGame() {
    console.log(
      `Створено мапу ${this.map},тут ${this.treasures} скарби, їх захищають ${this.enemy}`,
    );
  }
}
