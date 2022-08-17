abstract class Race {
  private static instances = 0;
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race.newInstance();
  }

  private static newInstance() {
    return this.instances + 1;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}

export default Race;