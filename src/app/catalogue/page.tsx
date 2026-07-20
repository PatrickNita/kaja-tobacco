import { DestinationPage } from "@/components/destination-page";
import { content } from "@/content/translations";

export default function CataloguePage() {
  return (
    <DestinationPage
      copy={content.en}
      destination="catalogue"
      locale="en"
    />
  );
}
