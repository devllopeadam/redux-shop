const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-medium">Welcome to the E-Shop</h1>
        <p>
          Your one-stop shop for all your needs. Enjoy a seamless shopping
          experience with a wide range of products at unbeatable prices.
        </p>
      </div>
      <img
        src="./shop.jpeg"
        loading="lazy"
        className="rounded-lg md:w-[80%]"
      />
    </div>
  );
};

export default Home;
