import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import Column from './column';
import Row from './row';
import styles from './styles/modal.style';

type Props = {
  children: React.ReactNode;
  headerImage: React.ReactNode;
  isVisible: boolean;
  onDismissModal: () => void;
  title: string;
};

export default function ModalComponent({
  children,
  headerImage,
  isVisible,
  onDismissModal,
  title,
}: Props) {
  return (
    <Modal
      isVisible={isVisible}
      onModalHide={onDismissModal}
      onBackdropPress={onDismissModal}
    >
      <View style={styles.modal}>
        <Row style={styles.header}>
          <Column style={styles.headerImage}>
            {headerImage}
          </Column>
          <Column style={styles.titleContainer}>
            <Text style={styles.title}>
              {title}
            </Text>
          </Column>
        </Row>
        <ScrollView style={styles.body}>
          {children}
        </ScrollView>
      </View>
    </Modal>
  );
}
