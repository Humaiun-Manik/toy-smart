import { useState } from "react";
import "./Product.css";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, price, reviews, relatedImg } = product;
  const [image, setImage] = useState(img);

  const maxRating = reviews.reduce((max, review) => Math.max(max, review.rating), 0);

  return (
    <div className="card card-compact product overflow-hidden">
      <Link to={`/product-details/${_id}`}>
        <figure>
          <img src={image} alt="" />
        </figure>
      </Link>

      <div className="card-body h-40">
        <div className="related-img absolute w-full">
          <div className="flex justify-center">
            {relatedImg.map((img, index) => (
              <div
                onClick={() => setImage(img)}
                key={index}
                className="w-8 h-8 border-2 border-[#ff0c00] rounded-full overflow-hidden mx-3 cursor-pointer hover:scale-125 duration-300"
              >
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white absolute">
          <div>
            <Link to={`/product-details/${_id}`}>
              <h2 className="text-xl hover:text-[#70be4e] duration-300 mb-1">{name}</h2>
            </Link>
            <h3 className="text-[#70be4e] text-xl font-semibold">Price: ${price}</h3>
          </div>
          <Rating className="mt-3" style={{ maxWidth: 100 }} value={maxRating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Product;
