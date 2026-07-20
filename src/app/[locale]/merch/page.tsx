import {
  LocalizedDestinationRoute,
  type LocalizedDestinationRouteProps,
} from "@/components/localized-destination-route";

export default function LocalizedMerchPage(
  props: LocalizedDestinationRouteProps,
) {
  return <LocalizedDestinationRoute {...props} destination="merch" />;
}
