import { Moment } from 'moment';

import { Fermentable, Hop, Yeast } from './ingredients';
import { Mash } from './mash';
import { Style } from './style';

export type Recipe = {
  name: string;
  style: Style|null;
  fermentables: Fermentable[];
  hops: Hop[];
  yeast: Yeast[];
  mash: Mash;
  lastBrewed: Moment;
};
