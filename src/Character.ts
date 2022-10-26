import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const randomizeOneToTen = () => getRandomInt(1, 10);

export default class Character implements Fighter {
  readonly race: Race;
  readonly archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    const dexterity = randomizeOneToTen();
    this._dexterity = dexterity;
    this.race = new Elf(name, dexterity);
    this.archetype = new Mage(name);
    this._maxLifePoints = (this.race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = randomizeOneToTen();
    this._defense = randomizeOneToTen();
    this._energy = {
      type_: this.archetype.energyType,
      amount: randomizeOneToTen(),
    };
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this.lifePoints -= damage;
    }

    if (this.lifePoints <= 0) {
      this.lifePoints = -1;
    }

    return this.lifePoints;
  }

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this.strength);
  }

  levelUp() {
    this.maxLifePoints += randomizeOneToTen();
    this._strength += randomizeOneToTen();
    this._dexterity += randomizeOneToTen();
    this._defense += randomizeOneToTen();

    this._energy.amount = 10;

    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }

    this.lifePoints = this.maxLifePoints;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  private set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  private set lifePoints(value: number) {
    this._lifePoints = value;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy() {
    return { ...this._energy };
  }
}
