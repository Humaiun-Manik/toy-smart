import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import { Rating } from "@smastrom/react-rating";
import { HiMinusSm } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { GrShareOption } from "react-icons/gr";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import serviceicon1 from "./../../assets/images/serviceicon1.png";
import serviceicon2 from "./../../assets/images/serviceicon3.webp";
import serviceicon3 from "./../../assets/images/serviceicon2.png";
import serviceicon4 from "./../../assets/images/serviceicon4.png";
import trust from "./../../assets/images/trust_b051f514-a365-4849-89d0-ffca00e35caf_1024x1024.avif";
import { ImPinterest } from "react-icons/im";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FiPlay } from "react-icons/fi";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const product = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [reviewForm, setREviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const { _id, img, name, title, available, price, relatedImg, reviews, description } = product;
  const maxRating = reviews.reduce((max, review) => Math.max(max, review.rating), 0);
  const selectedImg = relatedImg.findIndex((ri) => ri === img);

  // product add to cart
  const handleAddToCart = () => {
    const productInfo = {
      productId: _id,
      img,
      name,
      price,
      quantity,
      available,
    };

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Product successfully added to your cart! 🛒");
        }
      });
  };

  return (
    <div className="max-w-screen-2xl px-5 mx-auto mb-32">
      <SubHeader>Product Details</SubHeader>
      <div className="grid md:grid-cols-2 gap-5">
        <Carousel
          selectedItem={selectedImg}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={false}
        >
          {relatedImg.map((image, index) => (
            <div key={index}>
              <img src={image} alt="product" />
            </div>
          ))}
        </Carousel>
        <div>
          <h2 className="text-3xl text-[#333]">{name}</h2>
          <p className="text-2xl font-bold text-[#70be4e] my-3">Price: ${price}</p>
          <div className="flex">
            <Rating style={{ maxWidth: 100 }} value={maxRating} readOnly />
            {reviews.length === 0 ? (
              <p className="ms-3">No reviews</p>
            ) : (
              <p className="ms-3">({reviews.length})</p>
            )}
          </div>
          <div className="my-3">
            <p className="text-lg">
              <span className="font-medium text-[#333]">Availability:</span>{" "}
              <span className="text-[#70be4e]">{available} left in stock</span>
            </p>
            <progress
              className="progress progress-success w-56 bg-white"
              value={available}
              max="20"
            ></progress>
          </div>
          <p className="text-[#333] text-lg my-5">{title}</p>
          <div className="flex mt-8">
            <div className="border flex items-center justify-around py-2 w-28 text-lg rounded-md">
              <button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
                <HiMinusSm />
              </button>
              <p>{quantity}</p>
              <button disabled={quantity === available} onClick={() => setQuantity(quantity + 1)}>
                <BiPlus />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="uppercase bg-[#70be4e] text-white px-10 md:px-20 rounded-full ms-3"
            >
              Add To Cart
            </button>
          </div>
          <button className="border border-[#fbbc07] text-[#fbbc07] text-lg font-medium py-3 my-7 w-full md:w-2/4 rounded-md hover:bg-[#fbbc07] hover:text-white duration-300">
            Buy It Now
          </button>
          <div className="border rounded-md grid md:grid-cols-2 gap-7 p-7">
            <div className="flex items-center">
              <img className="h-9" src={serviceicon1} alt="" />
              <div className="ms-4 text-[#333]">
                <p className="font-semibold">Free Delivery</p>
                <p>Lorem Ipsum dummy</p>
              </div>
            </div>
            <div className="flex items-center">
              <img className="h-9" src={serviceicon2} alt="" />
              <div className="ms-4 text-[#333]">
                <p className="font-semibold">Big Savings</p>
                <p>Lorem Ipsum dummy</p>
              </div>
            </div>
            <div className="flex items-center">
              <img className="h-9" src={serviceicon3} alt="" />
              <div className="ms-4 text-[#333]">
                <p className="font-semibold">Customer Support</p>
                <p>Lorem Ipsum dummy</p>
              </div>
            </div>
            <div className="flex items-center">
              <img className="h-9" src={serviceicon4} alt="" />
              <div className="ms-4 text-[#333]">
                <p className="font-semibold">Gift Voucher</p>
                <p>Lorem Ipsum dummy</p>
              </div>
            </div>
          </div>
          <img className="my-8" src={trust} alt="" />
          <div className="flex items-center text-2xl gap-5 mt-8">
            <GrShareOption />
            <BsFacebook />
            <BsTwitter className="text-3xl" />
            <ImPinterest className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="md:flex gap-7">
        <div className="basis-3/4 border rounded-xl p-8">
          <Tabs>
            <TabList className={"flex mb-5"}>
              <Tab
                className={
                  "text-xl font-bold border-b-2 border-white cursor-pointer hover:text-[#70be4e] hover:border-b-2 hover:border-b-[#70be4e] duration-300"
                }
              >
                Description
              </Tab>
              <Tab
                className={
                  "text-xl font-bold border-b-2 border-white cursor-pointer mx-8 hover:text-[#70be4e] hover:border-b-2 hover:border-b-[#70be4e] duration-300"
                }
              >
                Reviews
              </Tab>
              <Tab
                className={
                  "text-xl font-bold border-b-2 border-white cursor-pointer hover:text-[#70be4e] hover:border-b-2 hover:border-b-[#70be4e] duration-300"
                }
              >
                Shipping Policy
              </Tab>
            </TabList>

            <TabPanel className="leading-8 text-lg text-justify">
              <p className="mb-5">{description}</p>
              <p>
                Minima illum, et in tenetur ea, molestiae commodi iure quos accusantium est fugit nostrum
                similique repellendus odio quis. Distinctio eligendi fuga, fugiat ut quis provident et
                quisquam. Modi officia quam, nihil magni repellendus nostrum quidem blanditiis. Porro quod
                saepe fuga sunt fugiat architecto minus amet eligendi, explicabo distinctio rem maxime iure
                veritatis eius cum culpa non illo doloribus vero minima? Impedit officiis soluta dolores enim.
                Ab, ipsam quis eum impedit dignissimos hic quasi maiores vel natus reprehenderit iusto qui
                itaque, error fugiat ullam temporibus quia enim! Obcaecati pariatur cumque cum laboriosam
                culpa?
              </p>
            </TabPanel>
            <TabPanel>
              <div className="border p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl text-[#333] font-semibold mb-3">Customer Reviews</h2>
                    <Rating style={{ maxWidth: 120 }} value={maxRating} readOnly />
                    <p className="text-[#333]">Based on 1 review</p>
                  </div>
                  <button
                    onClick={() => setREviewForm(!reviewForm)}
                    className="border-2 border-[#70be4e] py-2 px-5 rounded-full font-medium hover:bg-[#70be4e] hover:text-white duration-300"
                  >
                    Write a review
                  </button>
                </div>
                <hr className="my-5" />
                {!reviewForm ? (
                  <>
                    {reviews.map((review, index) => (
                      <div key={index} className="mb-7">
                        <div>
                          <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
                          <h3 className="text-xl text-[#333] font-semibold my-2">{review.username}</h3>
                          <p className="text-[#333]">{review.comment}</p>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div>
                    <h5 className="text-lg font-medium mb-1">Write a review</h5>
                    <form>
                      <div className="form-control w-full mb-3">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="form-control w-full mb-3">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="mb-3">
                        <p className="mb-2">Rating</p>
                        <Rating style={{ maxWidth: 120 }} value={rating} onChange={setRating} />
                      </div>
                      <div className="form-control w-full mb-3">
                        <label className="label">
                          <span className="label-text">Body of Review (1500)</span>
                        </label>
                        <textarea
                          className="textarea textarea-bordered h-52"
                          placeholder="Write your comments here"
                        ></textarea>
                      </div>
                      <input
                        className="text-white font-medium bg-[#70be4e] py-2 px-5 rounded-full my-3 hover:bg-[#fbbe0c] duration-300"
                        type="submit"
                        value="Submit Review"
                      />
                    </form>
                  </div>
                )}
              </div>
            </TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
        <div className="basis-1/4">
          <img className="w-full" src="https://i.ibb.co/8Pf6B0r/gh-copy-large.webp" alt="" />
        </div>
      </div>
      <div className="relative h-[700px] bg-[url('https://i.ibb.co/bHddZ8t/vb.webp')] bg-cover text-center mt-20 rounded-xl">
        <h2 className="text-3xl font-semibold mb-5 pt-52">We Have Everything You Need</h2>
        <p className="mb-5">
          Contrary to popular belief, Lorem Ipsum is popular belief not <br /> simply random text popular
          belief.
        </p>
        <div className="absolute top-2/4 left-1/3 h-24 w-24 bg-white rounded-full ml-5 md:ml-52 flex items-center justify-center border-2 hover:border-[#70be4e] hover:bg-[#ffffff05] hover:scale-125 duration-200">
          <FiPlay className="text-2xl text-[#70be4e]" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
