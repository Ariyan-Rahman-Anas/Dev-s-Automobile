import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
    const { blogsData } = useLoaderData()
    return (
      <div className="my-8">
        <div className="relative border- mx-auto mb-3">
          <div className="opacity-20">
            <h1 className="text-center uppercase tracking-[2rem] font-semibold md:text-8xl dark:text-white ">
              blogs
            </h1>
          </div>
          <div className=" md:absolute top-[25%] bottom-[25%] left-[25%] right-[25%] mx-auto ">
            <h1 className="text-center font-semibold text-5xl dark:text-gray-300 ">
              from our blogs
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
          {blogsData.map((blog, index) => (
            <Blog key={index} blog={blog}></Blog>
          ))}
        </div>
      </div>
    );
};
export default Blogs;