import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import useStyles from './AEMModal.styles.ts';

export interface AEMModalProps {
  visible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const AEMModal: React.FC<AEMModalProps> = ({ visible, onRequestClose, children }) => {
  const styles = useStyles();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

export default AEMModal;
