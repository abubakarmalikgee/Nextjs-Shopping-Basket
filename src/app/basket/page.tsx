"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  updateQuantity,
} from "@/features/basket/basketSlice";
import { ProductItem } from "@/global";
import { RootState } from "@/store/store";
import { FaTrash } from "react-icons/fa";

const Basket = () => {
  const dispatch = useDispatch();
  const ProductItems = useSelector((state: RootState) => state.basket.items);
  const [isClient, setIsClient] = useState(false);

  // Ensure this code only runs on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRemoveFromBasket = (id: string) => {
    dispatch(removeFromBasket(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity <= 0) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotal = (items: ProductItem[]) => {
    if (!isClient) return 0; // Prevent calculation on the server
    return items.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  if (!isClient) return null; // Avoid rendering on the server

  return (
    <div className="w-full container mx-auto py-6 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        Your Basket
      </h1>
      {ProductItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          Your basket is empty.
        </p>
      ) : (
        <div className="space-y-8">
          {ProductItems.map((item: ProductItem) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start md:justify-between border-b pb-4 space-y-4 md:space-y-0 md:space-x-4"
            >
              <div className="flex md:flex-row flex-col items-center gap-2">
                <div className="">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-base-content">
                    {item.title}
                  </h3>
                  <p className="text-md text-gray-500">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    className="btn btn-sm btn-outline btn-primary"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity! - 1)
                    }
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline btn-primary"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity! + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-error btn-sm btn-circle"
                  onClick={() => handleRemoveFromBasket(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          {/* Total Calculation */}
          <div className="flex justify-between items-center py-6 border-t mt-6">
            <span className="font-bold text-2xl">Total:</span>
            <span className="text-2xl text-primary font-semibold">
              ${calculateTotal(ProductItems)}
            </span>
          </div>
          <button className="btn btn-primary w-full md:w-auto mx-auto block text-white text-lg px-8 py-3 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;
