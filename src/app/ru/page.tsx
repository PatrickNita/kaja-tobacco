import { ProductPresentation } from "@/components/product-presentation";
import { content } from "@/content/translations";

export default function RussianPage() {
  return <ProductPresentation copy={content.ru} locale="ru" />;
}
