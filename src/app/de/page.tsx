import { ProductPresentation } from "@/components/product-presentation";
import { content } from "@/content/translations";

export default function GermanPage() {
  return <ProductPresentation copy={content.de} locale="de" />;
}
