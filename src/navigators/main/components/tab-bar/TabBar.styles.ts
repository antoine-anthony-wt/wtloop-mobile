import { makeStyles } from '@rneui/themed';
import { Platform } from 'react-native';

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.white,
  },
  itemContainer: {
    flex: 1,
    flexGrow: 1,
    paddingTop: Platform.select({
      ios: theme.spacing.xs,
      android: theme.spacing.xxs,
    }),
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    ...theme.typography().caption,
    fontSize: 12,
    marginTop: theme.spacing.xxs,
  },
}));

export default useStyles;
