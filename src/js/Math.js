export default class Math_ {
  constructor() {
    this._stoned = false;
    this._attack = 0;
  }

  get attack() {
    return this._attack;
  }

  set attack(args) {
    if (!this.stoned) {
      this._attack = args[0] * (1 - 0.1 * (args[1] - 1));
    } else {
      this._attack = args[0] * (1 - 0.1 * (args[1] - 1)) - Math.log2(args[1]) * 5;
    }
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    if (!(typeof value === 'boolean')) {
      throw new Error('stoned must be a boolean value');
    } else {
      this._stoned = value;
    }
  }
}
