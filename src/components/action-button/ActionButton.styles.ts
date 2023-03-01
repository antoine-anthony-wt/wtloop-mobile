import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  button: {
    overflow: 'hidden',
  },
  filledButton: {
    backgroundColor: 'dodgerblue',
  },
  filledReversedButton: {
    backgroundColor: 'white',
  },
  filledDisabledButton: {
    backgroundColor: 'lightgray',
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'dodgerblue',
  },
  outlinedReversedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'white',
  },
  outlinedDisabledButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'darkgray',
  },
  buttonMedium: {
    minHeight: 48,
  },
  buttonSmall: {
    minHeight: 36,
  },
  buttonLarge: {
    minHeight: 64,
  },
  title: {
    alignSelf: 'center',
    paddingHorizontal: 4,
    color: 'white',
  },
  mediumTitle: {
    fontSize: 18,
  },
  smallTitle: {
    fontSize: 14,
  },
  largeTitle: {
    fontSize: 22,
  },
  filledTitle: {
    color: 'white',
  },
  filledReversedTitle: {
    color: 'dodgerblue',
  },
  outlinedTitle: {
    color: 'dodgerblue',
  },
  outlinedReversedTitle: {
    color: 'white',
  },
  outlinedDisabledTitle: {
    color: 'darkgray',
  },
});

export default styles;
