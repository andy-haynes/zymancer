export type Fermentable = {
  name: string;
  value: number;
  color: string;
};

export type Weight = {
  unit: string;
  value: number;
};

export type HopAddition = {
  minutes: number;
  quantity: Weight;
  type: string;
  utilization: number;
};

export type Hop = {
  name: string;
  alpha: number;
  beta: number;
  additions: HopAddition[];
  aromaticProfile: string[];
};

export type Recipe = {
  name: string;
  fermentables: Fermentable[];
  hops: Hop[];
};
