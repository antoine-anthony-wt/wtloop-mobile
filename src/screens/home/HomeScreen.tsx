import React, { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import { useFetchAEM } from '../../hooks/useFetchAEM';
import { ActionButton, AEMModal } from '@wtloop/components';
import useStyles from './HomeScreen.styles';

export default function HomeScreen() {
  const styles = useStyles();
  const { isLoading, error, data: content } = useFetchAEM();
  const [ visible, setVisible ] = useState(false);

  const handleModalVisible = () => setVisible(prevState =>!prevState);

  useEffect(() => {
    console.log('isLoading:', isLoading);
    console.log('error:', error);
    console.log('content:', content);
  }, [isLoading, error, content]);

  return (
    <View style={styles.container}>
      <ActionButton title="Awesome Button" />
      <AEMModal visible={visible} onRequestClose={handleModalVisible} />
      <View>
        <Button title="Show Modal" onPress={handleModalVisible} />
      </View>
    </View>
  );
}

export const HomeScreenName = 'Book';
