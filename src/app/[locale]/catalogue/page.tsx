import {
  LocalizedDestinationRoute,
  type LocalizedDestinationRouteProps,
} from "@/components/localized-destination-route";

export default function LocalizedCataloguePage(
  props: LocalizedDestinationRouteProps,
) {
  return <LocalizedDestinationRoute {...props} destination="catalogue" />;
}
