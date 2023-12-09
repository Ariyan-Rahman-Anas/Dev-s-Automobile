import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiChevronsRight
} from "react-icons/bi";
import { AiOutlineGooglePlus } from "react-icons/ai";

const Blog = ({ blog }) => {
    const {img, title, author_name, description} = blog
    return (
      <div className="p-5 shadow-md rounded-md bg-teal-50 dark:bg-slate-600 dark:text-gray-300 ">
        <div>
          <img className="w-full" src={img} alt="" />
          <h1 className="font-semibold text-xl mt-3 ">{title}</h1>
          <p className="text-sm mb-3 mt-1">
            written by <span className="font-semibold">{author_name}</span>
          </p>
          <p className="text-sm">{description.slice(0, 100)}...</p>

          <div className="flex items-center justify-between mt-5 ">
            <div className="read-more-btn">
              <Link to={"/"} className="text-md flex items-end justify-start">
                <p>Read more</p>{" "}
                <BiChevronsRight className="text-lg"></BiChevronsRight>{" "}
              </Link>
            </div>
            <div className="social-icons text-2xl  flex items-center justify-center gap-x-2 ">
              <Link>
                <BiLogoFacebook className="hover:text-teal-600 "></BiLogoFacebook>
              </Link>
              <Link>
                <BiLogoInstagram className="hover:text-teal-600 "></BiLogoInstagram>
              </Link>
              <Link>
                <AiOutlineGooglePlus className="hover:text-teal-600 "></AiOutlineGooglePlus>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Blog;