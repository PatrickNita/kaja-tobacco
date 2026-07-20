import { pathLocales } from "@/content/translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return pathLocales.map((locale) => ({ locale }));
}

export default function LocalizedRouteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
