import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./Home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const Categories = [
    {
      img: "https://www.elmueble.com/medio/2020/08/24/salon-pequeno-con-sofa-chaiselongue_7e35693f_1593x2000.jpg",
      category: "Sofas",
      description:
        "Stylish and comfortable sofas for your living space. Choose from a variety of designs.",
      id: 1,
    },
    {
      img: "https://img.freepik.com/foto-gratis/funda-cojin-lino-blanco-sobre-silla_53876-134080.jpg?w=740&t=st=1678536568~exp=1678537168~hmac=51873004daadcbd93866a96e007bfe3a3441907ba7d8ba8503eb34368a0412c0",
      category: "Chairs",
      description:
        "Elegant and versatile chairs to enhance your seating. Find the perfect fit for your home.",
      id: 2,
    },
    {
      img: "https://static.westwingnow.de/image/upload/e_trim/c_pad,w_750,h_1000,pd_176_60_176_60/simple/52/6651/1688126.jpg",
      category: "Tables",
      description:
        "Discover our stylish tables that add functionality an elegance to your space.",
      id: 3,
    },
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => {
        // const randomImages = data.map((item) => item.download_url);
        setImages(data.map((item) => item.download_url).slice(0, 15));
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div>
          <section className="homeIntro">
            <h1>Welcome to Our Furniture Store</h1>
            <p>
              Discover a wide range of stylish and affordable furniture for your
              home.
            </p>
          </section>
          <h2 className="featured">Featured Categories</h2>
          <div className="featured-section">
            {Categories.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })}
          </div>
          <h2 className="featured">
            Share your photos <span className="hashtag">#DecóHome</span>
          </h2>
          <p className="decoGalleryP">
            Would you like your photo to appear here? Upload your Kave corner to
            Instagram using the hashtag #KaveHome and/or mention us @kavehome.
          </p>
          <div className="grid-container">
            {images.map((_, index) => (
              <img
                key={index}
                className="grid-item"
                src={images[index]}
                alt="grid pic"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
