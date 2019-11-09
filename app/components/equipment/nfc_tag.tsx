import React from 'react';
import { Text, View } from 'react-native';
import { Observable } from 'rxjs';

import {useTagReader } from '../../hooks/nfc';
import { Tag } from '../../types/nfc';

type TagProps = {
  tagReader: Observable<Tag>,
};

export default function NFCTag({ tagReader }: TagProps) {
  const tagId = useTagReader(tagReader);
  return (
    <View>
      <Text>
        Tag: {tagId}
      </Text>
    </View>
  );
}
