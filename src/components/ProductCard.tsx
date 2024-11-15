import { ProductItem } from "@/global";
import Image from "next/image";

interface ProductCardProps {
  product: ProductItem;
  onAddToBasket: (product: ProductItem) => void;
}

const ProductCard = ({ product, onAddToBasket }: ProductCardProps) => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden">
      <figure className="relative h-48 w-full">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-xl font-bold text-green-500">${product.price}</p>
        <div className="card-actions mt-4">
          <button
            className="btn btn-primary w-full"
            onClick={() => onAddToBasket(product)}
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
