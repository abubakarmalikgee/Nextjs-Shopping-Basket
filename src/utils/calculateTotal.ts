import { ProductItem } from "@/global";

export const calculateTotal = (items: ProductItem[]) => {
  if (typeof window === "undefined") return 0;

  return items
    .reduce((total, item) => {
      return total + item.price * (item.quantity || 1);
    }, 0)
    .toFixed(2);
};
