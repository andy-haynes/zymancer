import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ScreenName } from '../../constants/navigation';
import Screens from '../screens';

// tslint:disable-next-line:variable-name
const Stack = createStackNavigator();

export default function NavContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenName.Root}
          component={Screens.Root}
          options={{ title: 'zymancer' }}
        />
        <Stack.Screen
          name={ScreenName.Recipes}
          component={Screens.Recipes}
          options={{ title: 'Recipes' }}
        />
        <Stack.Screen
          name={ScreenName.Recipe}
          component={Screens.Recipe}
          options={{ title: 'Recipe' }}
        />
        <Stack.Screen
          name={ScreenName.Brew}
          component={Screens.Brew}
          options={{ title: 'Brew' }}
        />
        <Stack.Screen
          name={ScreenName.BrewInstance}
          component={Screens.BrewInstance}
          options={{ title: 'Brew Day' }}
        />
        <Stack.Screen
          name={ScreenName.Equipment}
          component={Screens.Equipment}
          options={{ title: 'Equipment' }}
        />
        <Stack.Screen
          name={ScreenName.Fermentation}
          component={Screens.Fermentation}
          options={{ title: 'Fermentation' }}
        />
        <Stack.Screen
          name={ScreenName.FermentationVessel}
          component={Screens.FermentationVessel}
          options={{ title: 'Fermentation Vessel' }}
        />
        <Stack.Screen
          name={ScreenName.Ferment}
          component={Screens.Ferment}
          options={{ title: 'Ferment' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
