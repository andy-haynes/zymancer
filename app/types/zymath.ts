import _ from 'lodash';

export type Unit = {
  unit: string;
  name: string;
  shortName: string;
  shorterName?: string;
};

export type Measurement = {
  value: number;
  unit: Unit;
};

export class Range {
  constructor(
    public low: number,
    public high?: number
  ) {}

  get avg() {
    if (!this.high) {
      return this.low;
    }
    return (this.high + this.low) / 2;
  }

  get values() {
    return _.filter([this.low, this.high]);
  }

  toString() {
    if (_.isNil(this.high)) {
      return this.low;
    }
    return `${this.low} - ${this.high}`;
  }
}

export type Ratio = {
  antecedent: Unit;
  consequent: Unit;
  value: number;
};
