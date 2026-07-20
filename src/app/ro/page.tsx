import { ProductPresentation } from "@/components/product-presentation";
import { content } from "@/content/translations";

export default function RomanianPage() {
  return <ProductPresentation copy={content.ro} locale="ro" />;
}
