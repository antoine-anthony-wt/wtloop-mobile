import { ScreenWidth } from '@rneui/base';
import { makeStyles } from '@rneui/themed';
import { spacing } from '@wtloop/assets/themes';

const useStyles = makeStyles(({ colors, typography }) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
    paddingBottom: spacing.md,
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
    marginHorizontal: spacing.lg,
    marginTop: -spacing.xxl,
  },
  offersContainer: {
    alignSelf: 'center',
    marginVertical: spacing.xxl,
  },
  offersTitle: {
    ...typography().caption,
    marginHorizontal: spacing.lg,
  },
  offersCarousel: {
    width: ScreenWidth,
    height: ScreenWidth,
    marginVertical: 0,
  },
  welcomeLounge: {
    ...typography({ color: colors.secondary, fontWeight: '600' }).heading,
    fontSize: 40,
    marginTop: spacing.xxl,
    alignSelf: 'center',
    textAlign: 'center',
  },
  placeholder: {
    marginTop: spacing.xxl * 2,
  },
}));

export default useStyles;
