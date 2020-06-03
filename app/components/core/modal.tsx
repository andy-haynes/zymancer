import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

import Colors from '../../theme/colors';
import Icon from './icon';
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
    >
      <View style={styles.modal}>
        <Row style={styles.header}>
          <View style={styles.headerImage}>
            {headerImage}
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {title}
            </Text>
          </View>
          <View style={styles.closeIconContainer}>
            <TouchableOpacity
              onPress={onDismissModal}
            >
              <Icon
                color={Colors.offWhite}
                name='cancel'
                size={24}
                type='material'
              />
            </TouchableOpacity>
          </View>
        </Row>
        <ScrollView style={styles.body}>
          {children}
        </ScrollView>
      </View>
    </Modal>
  );
}
