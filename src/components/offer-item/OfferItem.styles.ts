import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.secondary,
    width: '100%',
    aspectRatio: 1,
    borderRadius: theme.radius.xxs,
    overflow: 'hidden',
  },
  image: {
    height: '50%',
    width: '100%',
  },
  titleContainer: {
    flex: 1,
    paddingLeft: theme.spacing.xxl,
    width: '60%',
    justifyContent: 'center',
  },
  title: {
    ...theme.typography({ color: theme.colors.white, fontWeight: '600' })
      .heading,
  },
}));

export default useStyles;
