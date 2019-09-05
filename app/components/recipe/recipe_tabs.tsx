import _ from 'lodash';
import React, { useState } from 'react';
import { TabView } from 'react-native-tab-view';

import { Recipe } from '../../types/recipe';
import { getWidth } from '../../utils/dimensions';
import Fermentables from './fermentables/fermentables';
import Hops from './hops/hops';

type Props = {
  recipe: Recipe,
};

enum RecipeRoute {
  Fermentables = 'fermentables',
  Hops = 'hops',
}

type RouteProps = {
  route: {
    key: RecipeRoute,
  },
};

type Route = {
  key: RecipeRoute,
  render: (recipe: Recipe) => JSX.Element,
  title: string,
};

const routeMap: Route[] = [{
  key: RecipeRoute.Fermentables,
  title: 'fermentables',
  render: (recipe: Recipe) => (
    <Fermentables fermentables={recipe.fermentables} />
  ),
}, {
  key: RecipeRoute.Hops,
  title: 'hops',
  render: (recipe: Recipe) => (
   <Hops hops={recipe.hops} />
  ),
}];

const getRouteIndex = (route: RecipeRoute): number => _.indexOf(
  routeMap,
  _.find(routeMap, { key: route })
);

function RecipeTabs({ recipe }: Props) {
  const renderScene = ({ route }: RouteProps) => routeMap[getRouteIndex(route.key)].render(recipe);

  const [index, setIndex] = useState<number>(getRouteIndex(RecipeRoute.Fermentables));
  const navigationState = {
    index,
    routes: _.map(routeMap, (route) => _.pick(route, 'key', 'title')),
  };

  return (
    <TabView
      initialLayout={{ width: getWidth() }}
      navigationState={navigationState}
      onIndexChange={(i) => setIndex(i)}
      renderScene={renderScene}
      tabBarPosition='bottom'
    />
  );
}

export default RecipeTabs;
