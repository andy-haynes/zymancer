import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import  { calculatePotentialGravity, Recipe } from 'zymath';

import { icons } from '../../images';
import Fermentables from './fermentables/fermentables';
import Hops from './hops/hops';

export enum RecipeRoute {
  Fermentables = 'fermentables',
  Hops = 'hops',
  Mash = 'mash',
  Fermentation = 'fermentation',
}

type Route = {
  image: number,
  key: RecipeRoute,
  position: number,
  render: (recipe: Recipe) => JSX.Element,
  title: string,
};

const routeMap: Route[] = [{
  image: icons.grain,
  key: RecipeRoute.Fermentables,
  position: 0,
  title: 'fermentables',
  render: (recipe: Recipe) => (
    <Fermentables
      fermentables={recipe.fermentables || []}
      targetVolume={recipe.targetVolume}
    />
  ),
}, {
  image: icons.hop,
  key: RecipeRoute.Hops,
  position: 1,
  title: 'hops',
  render: (recipe: Recipe) => (
   <Hops
     gravity={calculatePotentialGravity({
       efficiency: recipe.mash.schedule.efficiency || 1,
       fermentables: recipe.fermentables,
       targetVolume: recipe.targetVolume,
     })}
     hops={recipe.hops || []}
   />
  ),
}, {
  image: icons.mash,
  key: RecipeRoute.Mash,
  position: 2,
  title: 'mash',
  render: () => (
   <View />
  ),
}, {
  image: icons.yeast,
  key: RecipeRoute.Fermentation,
  position: 3,
  title: 'fermentation',
  render: (recipe: Recipe) => (
    <View />
  ),
}];

export const getRoute = (route: RecipeRoute): Route|null =>
  _.find(routeMap, { key: route }) || null;

export const getRoutes = (): Array<{ key: RecipeRoute, title: string }> =>
  _.map(routeMap, (route) => _.pick(route, 'key', 'title'));

export const getRouteIndex = (route: RecipeRoute): number =>
  getRoute(route)?.position || 0;

export const getRouteImage = (route: RecipeRoute): number|null => {
  const targetRoute = getRoute(route);
  return targetRoute?.image || null;
};
