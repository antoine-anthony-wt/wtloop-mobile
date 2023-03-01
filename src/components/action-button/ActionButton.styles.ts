import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden',
  },
  button: {
    overflow: 'hidden',
  },
  filledButton: {
    backgroundColor: theme.colors.primary,
  },
  filledReversedButton: {
    backgroundColor: theme.colors.white,
  },
  filledDisabledButton: {
    backgroundColor: theme.colors.grey1,
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.primary,
  },
  outlinedReversedButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.white,
  },
  outlinedDisabledButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.grey1,
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
    color: theme.colors.white,
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
    color: theme.colors.white,
  },
  filledReversedTitle: {
    color: theme.colors.primary,
  },
  outlinedTitle: {
    color: theme.colors.primary,
  },
  outlinedReversedTitle: {
    color: theme.colors.white,
  },
  outlinedDisabledTitle: {
    color: theme.colors.grey1,
  },
}));

export default useStyles;
