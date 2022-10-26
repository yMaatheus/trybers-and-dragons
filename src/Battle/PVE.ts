import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this.monsters = monsters;
  }

  aliveMonsters(): number {
    return this.monsters.filter(({ lifePoints }) => lifePoints !== -1).length;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this.aliveMonsters() > 0) {
      this.monsters.forEach((monster) => {
        this.player.attack(monster);
        monster.attack(this.player);
      });
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}