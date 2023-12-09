import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    brandNameDetails,
    productName,
    productImage,
    productDescription,
    productPrice,
  } = product || {};

  const aProduct = {
    brandNameDetails,
    productName,
    productImage,
    productDescription,
    productPrice,
  };

  const handleAddToCart = () => {
    fetch(`https://assign-10-server-three.vercel.app/product`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(aProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Product added to Cart");
        }
        console.log(data);
      });
  };

  return (
    <div className="px-2 dark:text-gray-300">
      <div className="shadow-md bg-teal-100 dark:bg-slate-600 rounded-md w-full md:w-[] mx-auto my-8 flex flex-col md:flex-row items-start justify-center gap-3 ">
        <img
          className="w-full rounded-t-md md:rounded-l-md  "
          src={productImage}
          alt=""
        />
        <div className="px-5 py-2 ">
          <h1 className="text-2xl font-bold ">{brandNameDetails} </h1>
          <h2 className="text-5xl font-light my-4 ">{productName} </h2>
          <p className="font-semibold my-3">{productPrice} </p>
          <p>{productDescription} </p>
          <button
            onClick={handleAddToCart}
            className="mt-3 mb-4 text-white bg-teal-600 px-4 py-1 rounded-md "
          >
            <Link>Add to Cart</Link>
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProductDetails;
