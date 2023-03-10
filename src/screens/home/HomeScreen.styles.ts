import { ScreenWidth } from '@rneui/base';
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
    width: '100%',
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
  offersContainer: {
    alignSelf: 'center',
    marginVertical: theme.spacing.xxl,
  },
  offersTitle: {
    ...theme.typography().caption,
    marginHorizontal: theme.spacing.lg,
  },
  offersCarousel: {
    width: ScreenWidth,
    height: ScreenWidth,
    marginVertical: 0,
  },
}));

export default useStyles;
