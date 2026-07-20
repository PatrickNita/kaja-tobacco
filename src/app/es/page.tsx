import { ProductPresentation } from "@/components/product-presentation";
import { content } from "@/content/translations";

export default function SpanishPage() {
  return <ProductPresentation copy={content.es} locale="es" />;
}
