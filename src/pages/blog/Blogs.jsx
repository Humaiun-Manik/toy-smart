import SubHeader from "../../components/shared/subHeader/SubHeader";
import Blog from "./Blog";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <SubHeader>News</SubHeader>
      <div className="grid md:grid-cols-3 gap-10  my-32">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
