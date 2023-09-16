import { Link, useLoaderData } from "react-router-dom";
import SubHeader from "../../components/shared/subHeader/SubHeader";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";

const BlogDetails = () => {
  const blog = useLoaderData();

  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <SubHeader>Blog Details</SubHeader>
      <div className=" mt-32">
        <img className="w-full rounded-xl" src={blog.img} alt="" />
        <h1 className="text-3xl mt-10 mb-5">{blog.name}</h1>
        <p className="text-[#919090] mb-10">Date: {blog.date}</p>
        <p className="text-justify text-[#333]">{blog.description}</p>
        <div className="border-l-4 border-[#70be4e] ml-7 my-5">
          <p className="text-lg text-[#333] font-medium pl-3 ">
            Sunt facere officia iste, non dicta similique reprehenderit quod, necessitatibus itaque harum
            molestias eius obcaecati eos modi fugit cumque error animi maxime totam soluta, nesciunt
            asperiores ratione! Nam ipsum cupiditate dicta. Commodi voluptate deserunt dolor, perspiciatis
            soluta tempore quidem iure facilis tenetur.
          </p>
        </div>
        <p className="text-justify text-[#333]">{blog.description}</p>
        <div className="grid md:grid-cols-2 gap-10 my-16">
          <img
            className="rounded-xl"
            src="https://i.ibb.co/pXq991x/home4-banner-02-389f97e8-9d15-431a-abf3-8f72e0508721.webp"
            alt=""
          />
          <img className="rounded-xl" src="https://i.ibb.co/hgSkHvm/Untitled-2.webp" alt="" />
        </div>
        <p className="text-justify text-[#333]">{blog.description}</p>
        <div className="flex items-center justify-between my-16">
          <div>
            <Link className="hover:text-[#70be4e] duration-300">Book,</Link>
            <Link className="mx-3 hover:text-[#70be4e] duration-300">Kids,</Link>
            <Link className="hover:text-[#70be4e] duration-300">Toy</Link>
          </div>
          <div className="flex items-center text-xl">
            <p>Share: </p>
            <SlSocialFacebook />
            <SlSocialTwitter className="mx-3" />
            <ImPinterest2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
