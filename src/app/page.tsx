import Link from "next/link";

const Home = () => {
  return (
    <div
      className="grow hero min-h-screen"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-6 sm:text-6xl text-4xl font-semibold">
            Welcome to
            <br />
            <span className="font-extrabold text-black drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,0.8)]">
              Elite Collections
            </span>
          </h1>
          <p className="mb-6 text-xl font-medium">
            Discover the best deals on premium products handpicked for you. At
            Elite Collections, we bring you a unique shopping experience with
            top-quality items across various categories. Find your perfect
            products today!
          </p>
          <Link href={"/products"}>
            <button className="btn btn-lg">Explore Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
