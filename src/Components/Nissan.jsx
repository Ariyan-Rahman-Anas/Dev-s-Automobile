import NoProductIMG2 from "/No2.png";
const Nissan = () => {
  return (
    <div>
      <div
        className="h-[88vh] flex items-center justify-center text-white text-center px-2 "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${NoProductIMG2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div>
            <h1 className="text-7xl md:text-9xl uppercase">Nissan</h1>
            <hr className="bg-white border-2 rounded-md mb-3 " />
          </div>
          <h2 className="text-5xl">OOPS!</h2>
          <h3 className="font-semibold tracking-[.6rem] ">
            NO products available here!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Nissan;
<h1>Nissan</h1>;
