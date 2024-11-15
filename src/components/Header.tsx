"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { RootState } from "@/store/store";

const Header = () => {
  const ProductItems = useSelector((state: RootState) => state.basket.items);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const websiteName = "Elite Collections"; // Alternate: "Trendify Hub"

  // Toggle the mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle search input changes
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-base-200 text-base-content shadow-lg flex items-center justify-center px-3">
      <div className="container flex justify-between items-center py-4">
        {/* Website Logo and Name */}
        <Link href="/" className="text-2xl font-bold">
          {websiteName}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <Link href="/about" className="hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>

          {/* Search Bar for Desktop */}
          <div className="hidden lg:block">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search products"
              className="input input-bordered"
            />
          </div>
        </nav>
        {/* Basket Icon */}
        <div className="flex items-end gap-3 md:pl-32">
          <div className="relative p-3 rounded-full">
            <Link href="/basket">
              <FiShoppingCart className="text-2xl" />
              {ProductItems?.length > 0 && (
                <span className="badge badge-primary badge-md absolute -top-1 -right-2">
                  {ProductItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden pb-1">
            <button onClick={toggleMenu} aria-label="Menu" className="text-2xl p-2 rounded-full">
              <FiMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-base-100 bg-opacity-90 backdrop-blur-sm">
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
              className="text-2xl"
            >
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col items-center mt-16 space-y-4">
            {/* Mobile Navigation Links */}
            <Link
              href="/products"
              className="hover:text-primary text-lg"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-primary text-lg"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary text-lg"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            {/* Search Bar for Mobile */}
            <div className="w-10/12 mt-4">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search products"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
