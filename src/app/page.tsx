import { ProductPresentation } from "@/components/product-presentation";
import { content } from "@/content/translations";

export default function HomePage() {
  return <ProductPresentation copy={content.en} locale="en" />;
}
