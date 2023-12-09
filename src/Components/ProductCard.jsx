import { Link } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";

const ProductCard = ({ product }) => {
    const {productName, productImage, brandNameDetails, productPrice, productRating, _id} = product
  console.log(_id, "of", productName )
  
  const ColoredRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconFilled": {
      color: "#008080", 
    },
  }));

    return (
      <div className="px-2 dark:text-gray-300 ">
        <div className="shadow-md rounded-md dark:bg-slate-500 ">
          <img className="w-full rounded-t-md " src={productImage} alt="" />
          <div className="px-5 py-3 ">
            <h1 className="text-xl font-semibold">{productName} </h1>
            <h2 className="text-teal-600 bg-teal-100 px-2 py-[.1rem] rounded-sm w-fit font-semibold ">
              {brandNameDetails}{" "}
            </h2>
            <div className="flex items-center justify-between mt-2 text-teal-600 dark:text-gray-300 ">
              <div className="flex items-center">
                <BsCurrencyDollar></BsCurrencyDollar>
                <p className="font-semibold">{productPrice} </p>
              </div>
              <div>
                <Stack spacing={1}>
                  <ColoredRating
                    name="half-rating-read"
                    defaultValue={productRating}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
            </div>
            <div className="two-btn flex items-center justify-between mt-4">
              <button className="text-white bg-teal-600 px-4 py-1 rounded-md ">
                <Link to={`/products/${_id}`}>Details</Link>
              </button>
              <button className="text-white bg-teal-600 px-4 py-1 rounded-md ">
                <Link to={`/update/${_id}`}>Update</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};
export default ProductCard;