import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Product from "../../../components/shared/product/Product";

const Products = () => {
  const [activeTab, setActiveTab] = useState("feature");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/productsByCategory?category=${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setProducts(data);
          setLoading(false);
        }
      });
  }, [activeTab]);

  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <div className="text-center">
        <h2 className="text-3xl text-[#333333] font-bold mb-3">We Love Trends</h2>
        <p className="text-[#70be4e] text-lg">Featured Products</p>
      </div>
      <Tabs focusTabOnClick={false}>
        <TabList className="my-10 flex flex-col md:flex-row justify-center">
          <Tab
            onClick={() => {
              setActiveTab("feature");
            }}
            className={
              activeTab === "feature"
                ? "py-2 px-7 bg-[#fbbc07] text-white text-lg rounded-full"
                : "py-2 px-7 text-lg"
            }
          >
            Featured
          </Tab>
          <Tab
            onClick={() => {
              setActiveTab("best-sellers");
            }}
            className={
              activeTab === "best-sellers"
                ? "py-2 px-7 bg-[#fbbc07] text-white text-lg rounded-full"
                : "py-2 px-7 text-lg"
            }
          >
            Best Sellers
          </Tab>
          <Tab
            onClick={() => {
              setActiveTab("new-arrivals");
            }}
            className={
              activeTab === "new-arrivals"
                ? "py-2 px-7 bg-[#fbbc07] text-white text-lg rounded-full"
                : "py-2 px-7 text-lg"
            }
          >
            New Arrivals
          </Tab>
        </TabList>
        {loading ? (
          <div className="flex justify-center">
            <span className="loading loading-dots loading-lg text-[#70be4e]"></span>
          </div>
        ) : (
          <>
            <TabPanel className="grid md:grid-cols-3 gap-10">
              {activeTab === "feature" && (
                <>
                  {products.slice(0, 6).map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
                </>
              )}
            </TabPanel>
            <TabPanel className="grid md:grid-cols-3 gap-10">
              {activeTab === "best-sellers" && (
                <>
                  {products.slice(0, 6).map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
                </>
              )}
            </TabPanel>
            <TabPanel className="grid md:grid-cols-3 gap-10">
              {activeTab === "new-arrivals" && (
                <>
                  {products.slice(0, 6).map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
                </>
              )}
            </TabPanel>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default Products;
