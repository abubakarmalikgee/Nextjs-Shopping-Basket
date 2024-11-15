import { ProductItem } from "@/global";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: ProductItem[];
  onAddToBasket: (product: ProductItem) => void;
}

const ProductList = ({ products, onAddToBasket }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToBasket={onAddToBasket}
        />
      ))}
    </div>
  );
};

export default ProductList;
