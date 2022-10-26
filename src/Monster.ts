import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  receiveDamage(attackPoints: number): number {
    const damage = (attackPoints - this._lifePoints);
    
    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
}