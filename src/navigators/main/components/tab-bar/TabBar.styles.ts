import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.white,
  },
  itemContainer: {
    flex: 1,
    flexGrow: 1,
    marginTop: theme.spacing.xs,
  },
  item: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 11,
    marginTop: theme.spacing.xxs,
  },
}));

export default useStyles;
