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
    marginTop: 8,
  },
  item: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    // fontFamily: 'Roboto-Regular',
    fontSize: 11,
    marginTop: 4,
  },
  clockStatusBar: {
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
}));

export default useStyles;
