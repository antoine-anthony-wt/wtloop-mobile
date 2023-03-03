import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  scroll: {
    flex: 1,
    paddingBottom: theme.spacing.md,
  },
  map: {
    height: undefined,
    aspectRatio: 3 / 2,
  },
  mapIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  searchBar: {
    marginHorizontal: theme.spacing.lg,
    marginTop: -theme.spacing.xxl,
  },
}));

export default useStyles;
