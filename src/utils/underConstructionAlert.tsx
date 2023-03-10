import { Alert } from 'react-native';

const underConstructionAlert = () => {
  Alert.alert(
    'Under Construction 👷🏗️',
    "This feature hasn't been implemented yet",
    [{ text: 'Ok!' }],
  );
};

export default underConstructionAlert;
