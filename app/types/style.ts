import { Range } from './zymath';

export type BJCPCategory = {
  name: string;
  description: string;
  styles: RawStyle[];
};

export type RawStyle = {
  name: string;
  code: string;
  overallImpression: string;
  aroma: string;
  appearance: string;
  flavor: string;
  mouthfeel: string;
  tags: string[];
  OG?: string;
  FG?: string;
  IBUs?: string;
  SRM?: string;
  ABV?: string;
  commercialExamples?: string[];
  comments?: string;
  history?: string;
  characteristicIngredients?: string;
  styleComparison?: string;
};

type NullableRange = Range|null;
export type Style = {
  name: string;
  code: string;
  overallImpression: string;
  aroma: string;
  appearance: string;
  flavor: string;
  mouthfeel: string;
  tags: string[];
  category: string;
  OG: NullableRange;
  FG: NullableRange;
  IBUs: NullableRange;
  SRM: NullableRange;
  ABV: NullableRange;
  commercialExamples?: string[];
  comments?: string;
  history?: string;
  characteristicIngredients?: string;
  styleComparison?: string;
};
