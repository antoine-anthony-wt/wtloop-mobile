import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  ticketSubHeaderContainer: {
    marginLeft: theme.spacing.lg,
    marginTop: theme.spacing.xxxl,
  },
  subHeaderLabelContainer: {
    width: 71,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: theme.spacing.xxs,
    paddingVertical: theme.spacing.xxs,
    borderRadius: theme.radius.xxs,
  },
  subHeaderLabelText: {
    ...theme.typography({
      color: theme.colors.white,
      fontWeight: '600',
      lineHeight: 17.9,
    }).caption,
    fontSize: 15,
  },
  subHeaderTimerContainer: {
    marginTop: theme.spacing.xs,
  },
  subHeaderTimerText: {
    ...theme.typography({
      color: theme.colors.white,
      fontWeight: '400',
      lineHeight: 27.32,
    }).subheading,
  },
  subHeaderDividerContainer: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.xl,
    paddingTop: theme.spacing.xs,
  },
  subHeaderDivder: {
    width: '80%',
    borderColor: theme.colors.mint,
    borderWidth: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  ticketImageContainer: {
    marginTop: theme.spacing.xxxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
