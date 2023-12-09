import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import sliderImg1 from "/1.png";
import sliderImg2 from "/2.png";
import sliderImg3 from "/3.png";

const Hyundai = () => {
    const products = useLoaderData()
    const hyundaiProducts = products.filter(product=>product.brandNameDetails==="Hyundai")
    return (
       <div className="mb-14">
         {/* a slider */}
         <div>
           <div className="carousel w-full">
             <div id="slide1" className="carousel-item relative w-full">
               <img src={sliderImg1} className="w-full" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                 <a href="#slide3" className="btn btn-circle">
                   ❮
                 </a>
                 <a href="#slide2" className="btn btn-circle">
                   ❯
                 </a>
               </div>
             </div>
             <div id="slide2" className="carousel-item relative w-full">
               <img src={sliderImg2} className="w-full" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                 <a href="#slide1" className="btn btn-circle">
                   ❮
                 </a>
                 <a href="#slide3" className="btn btn-circle">
                   ❯
                 </a>
               </div>
             </div>
             <div id="slide3" className="carousel-item relative w-full">
               <img src={sliderImg3} className="w-full" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                 <a href="#slide2" className="btn btn-circle">
                   ❮
                 </a>
                 <a href="#slide1" className="btn btn-circle">
                   ❯
                 </a>
               </div>
             </div>
           </div>
         </div>
         {/* a slider */}

         <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
           {hyundaiProducts.map((product) => (
             <ProductCard key={product._id} product={product}></ProductCard>
           ))}
         </div>
       </div>
     );
};

export default Hyundai;<h1>Hyundai</h1>