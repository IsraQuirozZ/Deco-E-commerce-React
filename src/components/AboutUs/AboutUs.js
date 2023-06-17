import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

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
        <div>
          <h1>Soy About Us</h1>
          <h1>Contenido About Us</h1>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
