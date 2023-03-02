import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: theme.colors.background,
  },
}));

export default useStyles;
