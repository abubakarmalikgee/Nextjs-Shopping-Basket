import { FaRegSmile } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg mx-auto px-4">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-black drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,0.8)]">
              About Elite Collections
            </h1>
            <p className="mb-5 text-white text-base md:text-lg drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
              Discover quality, elegance, and the finest products with us. We
              are committed to delivering an unmatched shopping experience.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
          <p className="text-md md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            At Elite Collections, we believe in curating products that stand the
            test of time. Our journey began with the mission to offer
            high-quality items that not only meet but exceed customer
            expectations. Whether it&apos;s fashion, home goods, or accessories,
            we ensure that each product reflects sophistication and quality.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-10">
          <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                src="/images/our-team.jpg"
                alt="Our Team"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Our Team</h2>
              <p>
                Meet the passionate individuals who bring Elite Collections to
                life. We are a family dedicated to excellence.
              </p>
            </div>
          </div>
          <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                src="/images/our-product.jpg"
                alt="Our Products"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Our Products</h2>
              <p>
                Each product in our collection is carefully selected to meet the
                highest standards of quality and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50 px-4 md:px-5 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
          <p className="text-md md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We believe that quality, customer satisfaction, and sustainability
            are at the heart of everything we do. Our values guide every
            decision, ensuring we provide you with the best products and service
            possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <div className="card bg-base-100 shadow-xl text-center p-6">
            <FaRegSmile className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
            <p>
              We are committed to ensuring that every customer leaves with a
              smile. Your satisfaction is our priority.
            </p>
          </div>
          <div className="card bg-base-100 shadow-xl text-center p-6">
            <IoMdPeople className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold">Community Focused</h3>
            <p>
              We support local businesses and initiatives that promote a better
              future for everyone.
            </p>
          </div>
          <div className="card bg-base-100 shadow-xl text-center p-6">
            <GiShoppingBag className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-semibold">Sustainable Products</h3>
            <p>
              We prioritize sustainability in our product sourcing, ensuring
              eco-friendly options are always available.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
          <p className="text-md md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We offer more than just products; we offer a seamless shopping
            experience designed with your needs in mind. From personalized
            customer service to a wide range of high-quality products, here’s
            why Elite Collections is your ultimate shopping destination.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
          <div className="card w-full md:w-80 bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-2xl font-semibold">Exclusive Selection</h3>
              <p>Handpicked products that can&apos;t be found anywhere else.</p>
            </div>
          </div>
          <div className="card w-full md:w-80 bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-2xl font-semibold">Fast Shipping</h3>
              <p>Enjoy fast and reliable delivery right to your doorstep.</p>
            </div>
          </div>
          <div className="card w-full md:w-80 bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-2xl font-semibold">Excellent Support</h3>
              <p>
                Our customer support team is here to help you with anything you
                need, 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white text-center px-4 md:px-0 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join the Elite Collection
        </h2>
        <p className="text-md md:text-lg mb-6 max-w-xl mx-auto">
          Sign up now to receive exclusive offers, updates, and more directly in
          your inbox!
        </p>
        <Link href="/contact" className="btn btn-base-300">
          Connect with Us
        </Link>
      </section>
    </div>
  );
};

export default About;
