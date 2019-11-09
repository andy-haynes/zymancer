import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Recipe } from '../../types/recipe';
import styles from './styles/recipes.style';

export default function Recipes() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>{recipe && recipe.name}</Text>
      </View>
    </ScrollView>
  );
}
