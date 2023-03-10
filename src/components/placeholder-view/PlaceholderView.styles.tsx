import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  icon: {
    overflow: 'visible',
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    alignSelf: 'center',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.black,
  },
  message: {
    alignSelf: 'center',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: colors.black,
  },
  defaultButtonContainer: {
    marginTop: 20,
    maxWidth: 400,
    minWidth: 100,
  },
  defaultButton: {
    backgroundColor: colors.primary,
  },
  defaultButtonText: {
    fontWeight: '600',
  },
  customButtonContainer: {
    marginTop: 20,
  },
  or: {
    alignSelf: 'center',
    fontSize: 18,
    textAlign: 'center',
    color: colors.black,
    marginTop: 20,
  },
}));

export default useStyles;
