import { useTheme } from '@rneui/themed';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import useStyles from './LoadingView.styles';

interface Props {
  visible?: boolean;
  message?: string;
  overlay?: boolean;
  container?: boolean;
}

const LoadingView = (props: Props) => {
  const { visible, message, overlay, container } = props;
  const { theme } = useTheme();
  const styles = useStyles();

  if (visible) {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          styles.container,
          overlay && styles.overlay,
        ]}>
        <View
          style={[
            styles.centeredView,
            container && {
              backgroundColor: theme.colors.white,
            },
          ]}>
          <ActivityIndicator
            animating
            size="large"
            color={theme.colors.primary}
          />
          {message !== undefined && message.length && (
            <Text style={styles.message}>{message}</Text>
          )}
        </View>
      </View>
    );
  }
  return null;
};

export default LoadingView;
