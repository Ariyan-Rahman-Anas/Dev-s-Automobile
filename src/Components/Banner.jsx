import bannerBG from '/banner.jpg'
const Banner = () => {
  return (
    <div
      className="h-[100vh] flex items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.01), rgba(0,0,0,0.7)),url(${bannerBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white text-center px-2">
        <h1 className="text-3xl ">
          <span className="text-gray-300">
            Roads are canvas, Cars are brushes: paint your
          </span>{" "}
          <br />
          <span className="text-7xl md:text-8xl ">Story of Adventure!</span>
        </h1>
        <p className='md:px-16 mt-4'>
          A car is more than metal and wheels; it's freedom, adventure, and
          comfort in motion—a modern marvel that carries us through life's
          tapestry, creating cherished memories and chasing dreams on an open
          canvas.
              </p>
      </div>
    </div>
  );
};
export default Banner;
