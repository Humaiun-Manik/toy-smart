const Gallery = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 mb-24">
      <div className="text-center">
        <h2 className="text-3xl text-[#333333] font-bold mb-3">Recent Photo Shoots</h2>
        <p className="text-[#70be4e] text-lg">Check Gallery</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        <div className="flex items-center">
          <img className="rounded-xl" src="https://i.ibb.co/qD6D2jz/post5-copyright.webp" alt="" />
        </div>
        <div>
          <img className="rounded-xl" src="https://i.ibb.co/KzJr4xh/post9-copyright.webp" alt="" />
        </div>
        <div className="flex items-center">
          <img className="rounded-xl" src="https://i.ibb.co/zN1pdVz/post10-copyright.webp" alt="" />
        </div>
        <div>
          <img className="rounded-xl" src="https://i.ibb.co/C0HkZWZ/post11-copyright.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
