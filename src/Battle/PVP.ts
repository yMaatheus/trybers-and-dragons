import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private player2: Fighter;
  
  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this.player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}