import { ScreenWidth } from '@rneui/base';
import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    width: ScreenWidth,
    backgroundColor: theme.colors.background,
    borderTopStartRadius: theme.radius.lg,
    borderTopEndRadius: theme.radius.lg,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topSeparator: {
    height: 5,
    backgroundColor: theme.colors.primary,
  },
  bottomSeparator: {
    height: 0.5,
    backgroundColor: theme.colors.divider,
  },
  itineraryContainer: {
    flexDirection: 'row',
  },
  originDestination: {
    ...theme.typography().subheading,
  },
  travelTime: {
    ...theme.typography({ color: theme.colors.grey3 }).caption,
  },
  travelTimeTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: theme.spacing.xxs,
  },
  travelTimeTitle: {
    ...theme.typography({ color: theme.colors.secondary, fontWeight: '600' })
      .caption,
  },
  arrivalContainer: {
    flex: -1,
    alignItems: 'flex-end',
  },
  arrivalTitle: {
    ...theme.typography({ color: theme.colors.grey3 }).caption,
  },
  arrivalTime: {
    ...theme.typography({ color: theme.colors.primary, fontWeight: '600' })
      .caption,
  },
  qrCodeButton: {
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: theme.radius.xxl,
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    marginRight: theme.spacing.sm,
    alignSelf: 'center',
  },
}));

export default useStyles;
