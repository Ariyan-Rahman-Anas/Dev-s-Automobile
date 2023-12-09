import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError()
    return (
      <div className="flex items-center justify-center h-[80vh] text-center text-sm ">
        <div>
          <h1 className="font-semibold text-2xl ">OOPS!</h1>
          <h2 className="text-7xl">{error.status}</h2>
          <p>{error.statusText} </p>
          <p className="mb-3">__Go back where you from__</p>
          <Link to={"/"} className="border-2 bg-teal-100 hover:bg-teal-500 border-teal-500 rounded-md py-1 px-2 " >Back to Home</Link>
        </div>
      </div>
    );
};

export default ErrorPage;