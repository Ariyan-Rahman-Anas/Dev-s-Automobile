import { useLoaderData, Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const MyCart = () => {
  const cartProducts = useLoaderData();
  const [product, setProduct] = useState(cartProducts);

  const ColoredRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconFilled": {
      color: "#008080",
    },
  }));

  const handleRemoveItem = (_id) => {
    fetch(`https://assign-10-server-three.vercel.app/carts/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("pls dlt the item of :", data);
        if (data.deletedCount > 0) {
          toast("Deleted Successfully");
          const remaining = product.filter((product) => product._id !== _id);
          if (cartProducts.length > 0) {
            setProduct(remaining);
          } else {
            setProduct([]);
          }
        }
      });
  };

  return (
    <div className="px-2 mt-10 mb-5 dark:text-gray-300 ">
      <h1 className="text-center font-semibold mt-4 text-3xl uppercase ">
        Your're Desired on
      </h1>
      <h2 className="text-center font-semibold mb-4 text-lg ">
        our {product.length} products...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {product.map((product) => (
          <div key={product._id}>
            <div>
              <div className="shadow-md rounded-md dark:bg-slate-500 ">
                <img
                  className="w-full rounded-t-md"
                  src={product.productImage}
                  alt=""
                />
                <div className="p-4 flex flex-col gap-y-2">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold ">
                      {product.productName}{" "}
                    </h1>
                    <h2 className="font-semibold">
                      {product.brandNameDetails}{" "}
                    </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{product.productPrice} </p>
                    <Stack spacing={1}>
                      <ColoredRating
                        name="half-rating-read"
                        defaultValue={product.productRating}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(product._id)}
                    className="text-white bg-teal-600 px-4 py-2 rounded-md mt-5 "
                  >
                    <Link>Remove</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};
export default MyCart;
