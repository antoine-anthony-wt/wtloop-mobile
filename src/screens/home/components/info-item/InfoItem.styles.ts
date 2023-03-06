import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    marginVertical: theme.spacing.xxl,
    aspectRatio: 1,
    alignSelf: 'center',
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 6,
    borderRadius: theme.radius.sm,
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.sm,
    overflow: 'hidden',
  },
  image: {
    height: '55%',
    width: '100%',
    borderTopLeftRadius: theme.radius.sm,
    borderTopRightRadius: theme.radius.sm,
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
