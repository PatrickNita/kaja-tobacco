import { DestinationPage } from "@/components/destination-page";
import { content } from "@/content/translations";

export default function MerchPage() {
  return <DestinationPage copy={content.en} destination="merch" locale="en" />;
}
