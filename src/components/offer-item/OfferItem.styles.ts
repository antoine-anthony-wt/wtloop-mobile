import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(({ colors, radius, spacing, typography }) => ({
  container: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: radius.xxs,
  },
  wrapper: {
    flex: 1,
  },
  content: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    backgroundColor: colors.secondary,
    borderRadius: radius.xxs,
    overflow: 'hidden',
  },
  image: {
    height: '55%',
    width: '100%',
    backgroundColor: colors.grey4,
  },
  titleContainer: {
    flex: 1,
    paddingLeft: spacing.xxl,
    width: '60%',
    justifyContent: 'center',
  },
  title: {
    ...typography({ color: colors.white, fontWeight: '600' }).heading,
  },
  tagButton: {
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '-7%',
  },
}));

export default useStyles;
