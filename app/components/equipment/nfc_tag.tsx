import React from 'react';
import { Text, View } from 'react-native';

type TagProps = {
  tagId: string|null,
};

export default function NFCTag({ tagId }: TagProps) {
  if (!tagId) {
    return (
      <View />
    );
  }

  return (
    <View>
      <Text>
        Tag: {tagId}
      </Text>
    </View>
  );
}
