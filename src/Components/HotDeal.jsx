import { Link } from "react-router-dom";
import hotDeal from '/hotDeal.jpg'
import dealler from "/dealler.png"

const HotDeal = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${hotDeal})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex justify-between px-6 text-center md:text-left "
      >
        <div className="text-white px-2 flex-1 pt-16 ">
          <h1 className="font-bold text-5xl text-teal-500 pb-6 ">Hurry Up!</h1>
          <p className="text-5xl my-3">Hot Deal! Sale Up To 20% off</p>
          <p className="my-6 text-gray-300 ">
            Explore scorching deals at our Car Shop! Discover unbeatable prices,
            exclusive offers, and limited-time promotions on the hottest wheels
            in town. Don't miss out on the opportunity to drive home your dream
            car at a sizzling deal.
          </p>

          <div className="deadline flex items-center justify-center md:justify-start mt-4 ">
            <div className="flex flex-col items-center w-[5rem] ">
              <h1 className="bg-teal-500 rounded-full h-[3.5rem] w-[3.5rem] text-center leading-10 text-lg p-2 font-bold ">
                512
              </h1>
              <p>Days</p>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <h1 className="bg-teal-500 h-[3.5rem] w-[3.5rem] text-center text-lg leading-10 rounded-full p-2 font-bold ">
                {hour}
              </h1>
              <p>Hours</p>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <h1 className="bg-teal-500 h-[3.5rem] w-[3.5rem] text-center rounded-full p-2 leading-10 text-lg font-bold ">
                {minute}
              </h1>
              <p>Minutes</p>
            </div>
            <div className="flex flex-col items-center w-[5rem]">
              <h1 className="bg-teal-500 h-[3.5rem] w-[3.5rem] text-center rounded-full p-2 leading-10 text-lg font-bold ">
                {second}
              </h1>
              <p>Second</p>
            </div>
          </div>

          <button className="mt-14 mb-8">
            <Link
              to={"/"}
              className="bg-teal-500 px-5 py-3 rounded-md font-semibold "
            >
              Shop now
            </Link>
          </button>
        </div>
        <div className=" flex-1 hidden md:block ">
          <img className="w-[100%] " src={dealler} alt="" />
        </div>
      </div>
    );
};
export default HotDeal;