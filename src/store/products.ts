import { ProductItem } from "@/global";
import { v4 as uuid4 } from "uuid";

const products: ProductItem[] = [
  {
    id: uuid4(),
    title: "DSLR Camera",
    description:
      "High-resolution DSLR camera with 24MP sensor, 4K video recording, and Wi-Fi connectivity.",
    price: 1200,
    imageUrl: "/images/camera.png",
  },
  {
    id: uuid4(),
    title: "Wireless Headphones",
    description:
      "Noise-canceling wireless headphones with Bluetooth 5.0 and 30-hour battery life.",
    price: 150,
    imageUrl: "/images/headphone.avif",
  },
  {
    id: uuid4(),
    title: "Moisturizing Lotion",
    description:
      "Hydrating body lotion with natural ingredients to keep your skin soft and smooth.",
    price: 25,
    imageUrl: "/images/lotion.png",
  },
  {
    id: uuid4(),
    title: "Smart Watch",
    description:
      "Feature-packed smartwatch with heart rate monitor, GPS, and multiple sport modes.",
    price: 200,
    imageUrl: "/images/watch.jpeg",
  },
  {
    id: uuid4(),
    title: "Makeup Kit",
    description:
      "Complete makeup kit with foundation, blush, eyeshadow, lipstick, and more.",
    price: 50,
    imageUrl: "/images/makeup-kit.jpg",
  },
  {
    id: uuid4(),
    title: "Running Shoes",
    description:
      "Lightweight and breathable running shoes with cushioned sole for added comfort.",
    price: 80,
    imageUrl: "/images/shoe.jpg",
  },
  {
    id: uuid4(),
    title: "Luxury Perfume",
    description:
      "Elegant and long-lasting fragrance with floral and woody notes for a sophisticated scent.",
    price: 100,
    imageUrl: "/images/perfume.avif",
  },
];

export default products;
