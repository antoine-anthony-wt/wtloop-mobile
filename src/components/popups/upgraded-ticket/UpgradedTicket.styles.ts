import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 320,
    height: 320,
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.xxs,
  },
}));

export default useStyles;
