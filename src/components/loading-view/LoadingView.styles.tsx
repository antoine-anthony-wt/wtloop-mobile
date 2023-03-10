import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999999999998,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  centeredView: {
    borderRadius: 20,
    padding: theme.spacing.xxl,
    alignItems: 'center',
    minHeight: 100,
    minWidth: 100,
  },
  message: {
    ...theme.typography().subheading,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
  },
}));

export default useStyles;
