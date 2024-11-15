export interface ProductItem {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity?: number;
  imageUrl: string;
  added?: boolean;
}
