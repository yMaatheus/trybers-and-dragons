import Race from './Race';

class Halfling extends Race {
  private static instancesCount = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.newInstance();
  }

  private static newInstance() {
    this.instancesCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static override createdRacesInstances() {
    return this.instancesCount;
  }
}

export default Halfling;