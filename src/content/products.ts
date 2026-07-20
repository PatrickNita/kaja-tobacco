export const productIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
] as const;

export type ProductId = (typeof productIds)[number];

export const productPanels = [
  { ids: productIds.slice(0, 12), range: "01–12" },
  { ids: productIds.slice(12, 24), range: "13–24" },
  { ids: productIds.slice(24), range: "25–30" },
] as const;

export function formatProductId(id: ProductId) {
  return String(id).padStart(2, "0");
}
