import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { brandName, brandImage} = brand || {}
    return (
      <div>
        <Link to={`/brands/${brandName.toLowerCase()}`}>
          <div className="shadow-md rounded-md bg-teal-50 dark:bg-slate-600 ">
            <img className="w-full rounded-t-md" src={brandImage} alt="" />
            <h2 className="text-2xl font-semibold pt-5 pb-2  uppercase text-center dark:text-gray-300 ">
              {brandName}
            </h2>
          </div>
        </Link>
      </div>
    );
};
export default Brand;