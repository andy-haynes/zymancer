import _ from 'lodash';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';

import colors from '../../theme/colors';
import { Recipe } from '../../types/recipe';
import { getWidth } from '../../utils/dimensions';
import {
  getRouteImage,
  getRouteIndex,
  getRoute,
  getRoutes,
  RecipeRoute,
} from './recipe_routes';

type Props = {
  recipe: Recipe,
};

type RouteProps = {
  route: {
    key: RecipeRoute,
  },
};

function RecipeTabs({ recipe }: Props) {
  const [index, setIndex] = useState<number>(getRouteIndex(RecipeRoute.Fermentables));
  const navigationState = {
    index,
    routes: getRoutes(),
  };

  const renderScene = ({ route }: RouteProps) =>
    _.invoke(getRoute(route.key), 'render', recipe);

  return (
    <TabView
      initialLayout={{ width: getWidth() }}
      navigationState={navigationState}
      onIndexChange={(i) => setIndex(i)}
      renderScene={renderScene}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          renderIcon={({ route }: RouteProps) => {
            const routeImage = getRouteImage(route.key);
            if (!routeImage) {
              return null;
            }
            return (
              <Image
                source={routeImage}
                style={{ height: 24, width: 24 }}
              />
            );
          }}
          renderLabel={() => null}
          style={{
            backgroundColor: colors.black,
          }}
        />
      )}
      tabBarPosition='bottom'
    />
  );
}

export default RecipeTabs;
