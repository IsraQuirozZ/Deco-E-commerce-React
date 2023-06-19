import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import "./AboutUs.css";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <main className="mainAboutUs">
          <p className="mainP">
            At Decó, we believe that everyone deserves to have a beautiful and
            comfortable home. That's why we offer a wide range of high-quality
            furniture at competitive prices.
          </p>

          <section>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide our customers with exceptional furniture
              options that combine style, functionality, and value. We aim to
              create living spaces that reflect individual tastes and enhance
              the overall ambiance of any home.
            </p>
          </section>

          <section className="aboutInfo">
            <div className="aboutInfoCol">
              <h2>Quality Craftsmanship</h2>
              <p>
                Each piece of furniture at Decó is crafted with precision and
                care. Our team of skilled artisans uses the finest materials to
                ensure durability and long-lasting beauty. We pay attention to
                every detail to deliver furniture that exceeds expectations.
              </p>
            </div>
            <div className="aboutInfoCol">
              <h2>Customer Satisfaction</h2>
              <p>
                Customer satisfaction is at the core of our business. We strive
                to provide exceptional service, from assisting with product
                selection to ensuring timely deliveries. Your happiness and
                satisfaction with your furniture shopping experience are our top
                priorities.
              </p>
            </div>
          </section>

          <section className="visitUs">
            <h2>Visit Us Today</h2>
            <p>
              We invite you to visit our showroom and explore our extensive
              collection of furniture. Our friendly and knowledgeable staff will
              be delighted to assist you in finding the perfect pieces to
              enhance your home. Let us help you create a space that you'll love
              for years to come.
            </p>
          </section>
        </main>
      )}
    </div>
  );
};

export default AboutUs;
