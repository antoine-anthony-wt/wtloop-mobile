import { ScreenHeight } from '@rneui/base';
import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(({ colors, spacing, typography }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  ticketSubHeaderContainer: {
    marginLeft: spacing.lg,
    marginTop: ScreenHeight * 0.02,
  },
  state: {
    alignSelf: 'flex-start',
  },
  stateButton: {
    backgroundColor: colors.secondary,
    minHeight: 28,
  },
  subHeaderLabelText: {
    ...typography({
      color: colors.white,
      fontWeight: '600',
      lineHeight: 17.9,
    }).caption,
    fontSize: 15,
  },
  subHeaderTimerContainer: {
    marginTop: spacing.xs,
  },
  subHeaderTimerText: {
    ...typography({
      color: colors.white,
      fontWeight: '400',
      lineHeight: 27.32,
    }).subheading,
  },
  subHeaderDividerContainer: {
    paddingLeft: spacing.lg,
    paddingRight: spacing.xl,
    paddingTop: spacing.xs,
  },
  subHeaderDivider: {
    width: '80%',
    borderColor: colors.mint,
    borderWidth: 1,
    paddingHorizontal: spacing.lg,
  },
  ticketImageContainer: {
    marginTop: spacing.xxl,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: Math.min(ScreenHeight * 0.7, 600),
  },
  qr: {
    position: 'absolute',
    height: '38%',
    width: undefined,
    aspectRatio: 1,
    top: '23%',
    alignSelf: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20%',
    backgroundColor: colors.grey4,
    zIndex: -1,
  },
}));

export default useStyles;
