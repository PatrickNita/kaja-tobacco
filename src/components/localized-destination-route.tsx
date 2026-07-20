import { notFound } from "next/navigation";
import { DestinationPage } from "@/components/destination-page";
import {
  content,
  isPathLocale,
  type DestinationId,
} from "@/content/translations";

export type LocalizedDestinationRouteProps = {
  params: Promise<{ locale: string }>;
};

type LocalizedDestinationProps = LocalizedDestinationRouteProps & {
  destination: DestinationId;
};

export async function LocalizedDestinationRoute({
  destination,
  params,
}: LocalizedDestinationProps) {
  const { locale } = await params;

  if (!isPathLocale(locale)) {
    notFound();
  }

  return (
    <DestinationPage
      copy={content[locale]}
      destination={destination}
      locale={locale}
    />
  );
}
