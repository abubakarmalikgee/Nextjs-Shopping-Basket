import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="w-full bg-base-200 text-base-content py-6 flex items-center justify-center px-3">
      <div className="container flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
        {/* Company Info */}
        <div>
          <h2 className="font-bold text-lg">Elite Collections</h2>
          <p>Delivering quality with passion.</p>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold">Get in Touch</h3>
          <p>Email: support@elitecollections.com</p>
          <p>Phone: +92 123 4567890</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.facebook.com/abubaker.malik.549436/"
            aria-label="Facebook"
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/abubakarmalik28/"
            aria-label="Instagram"
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
