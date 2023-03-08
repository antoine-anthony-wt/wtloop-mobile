import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: theme.radius.xxs,
  },
  wrapper: {
    flex: 1,
  },
  content: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius.xxs,
    overflow: 'hidden',
  },
  image: {
    height: '55%',
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
  tagButton: {
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '-7%',
  },
}));

export default useStyles;
