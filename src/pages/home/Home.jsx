import Testimonial from "../../components/shared/testimonial/Testimonial";
import Banner from "./banner/Banner";
import Collections from "./collections/Collections";
import Exclusive from "./exclusive/Exclusive";
import Gallery from "./gallery/Gallery";
import Questions from "./questions/Questions";

const Home = () => {
  return (
    <>
      <Banner />
      <Collections />
      <Exclusive />
      <Testimonial />
      <Gallery />
      <Questions />
    </>
  );
};

export default Home;
