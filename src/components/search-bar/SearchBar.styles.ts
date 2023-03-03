import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 56,
    flexDirection: 'row',
    backgroundColor: theme.colors.background,
    borderRadius: theme.radius.md,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 6,
    overflow: 'visible',
  },
  containerFocused: {
    shadowColor: theme.colors.secondary,
    borderColor: theme.colors.secondary,
  },
  inputContainer: {
    flex: 0,
    minHeight: 56,
    marginRight: -10,
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  input: {
    ...theme.typography().default,
    marginLeft: 0,
    marginRight: 0,
  },
  errorContainer: {
    marginTop: -4,
    height: 0,
  },
  buttonContainer: {
    marginRight: -4,
    height: 56,
    aspectRatio: 1,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderTopEndRadius: theme.radius.md,
    borderBottomEndRadius: theme.radius.md,
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    height: 40,
    width: 40,
    borderRadius: Number.MAX_SAFE_INTEGER,
  },
}));

export default useStyles;
