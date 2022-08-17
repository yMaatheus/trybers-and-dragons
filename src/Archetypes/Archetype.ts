import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _name: string;
  private readonly _special: number;
  private readonly _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  private static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }
}

export default Archetype;