import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from './styles/recipes.style';

type Recipe = {
  name: string;
};

export default function Recipes() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{recipe && recipe.name}</Text>
        <Text>{!recipe && 'No recipe yet!'}</Text>
      </View>
    </ScrollView>
  );
}
