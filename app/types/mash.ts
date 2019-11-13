import {
  LossType,
  MashMethod,
  SpargeMethod,
} from '../constants/recipe';
import {
  Measurement,
  Ratio,
} from './zymath';

export type Loss = {
  type: LossType;
  value?: Measurement;
  rate?: Ratio;
};

export type Rest = {
  time: Measurement;
  temperature: Measurement;
  recirculated?: boolean;
};

export type MashSchedule = {
  efficiency: number;
  method: MashMethod;
  rests: Rest[];
  sparge: SpargeMethod;
  losses?: Loss[];
  mashout?: Rest;
};

export type Mash = {
  schedule?: MashSchedule;
};
