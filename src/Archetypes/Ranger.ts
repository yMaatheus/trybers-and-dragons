import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static instancesCount = 0;
  private readonly _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.newInstance();
  }

  get energyType() {
    return this._energyType;
  }

  private static newInstance() {
    this.instancesCount += 1;
  }

  public static override createdArchetypeInstances(): number {
    return this.instancesCount;
  }
}

export default Ranger;