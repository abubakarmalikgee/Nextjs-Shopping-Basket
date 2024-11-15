"use client";

import { useDispatch } from "react-redux";
import { addToBasket } from "@/features/basket/basketSlice";
import { ProductItem } from "@/global";
import products from "@/store/products";
import ProductList from "@/components/ProductList";

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToBasket = (product: ProductItem) => {
    dispatch(addToBasket(product));
  };

  return (
    <div className="grow container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to Our Store
      </h1>
      <ProductList products={products} onAddToBasket={handleAddToBasket} />
    </div>
  );
};

export default Products;
