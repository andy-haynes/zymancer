import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ImageRow, { ImageNav } from './image_row';

export const routes = [{
  image: 'https://cdn.pixabay.com/photo/2016/03/21/23/36/brewery-1271858_1280.jpg',
  label: 'Brew',
}, {
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Saccharomyces_cerevisiae_SEM.jpg',
  label: 'Fermenting',
}, {
  image: 'https://c.pxhere.com/photos/8c/9b/alcohol_barrel_beer_brewery_business_containers_factory_industry-1522811.jpg!d',
  label: 'Packaging',
}, {
  image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/DuckfootbeerflightJune2016.JPG',
  label: 'Recipes',
}, {
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/WortHydrometer.JPG',
  label: 'Tools',
}, {
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Malt_en_grain.JPG/1600px-Malt_en_grain.JPG',
  label: 'Ingredients',
}];

interface Props {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    paddingBottom: 20,
    position: 'relative',
    top: 20,
  },
});

export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {routes.map((route: ImageNav) => (
            <ImageRow
              key={route.label}
              navOption={route}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
