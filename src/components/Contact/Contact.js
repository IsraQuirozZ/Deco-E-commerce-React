import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import "./Contact.css";
import Btn from "../Btn/Btn";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <main>
          <section class="contact-form">
            <h2 className="contactTitle">Contact Form</h2>
            <form action="submit.php" method="post">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>

              <Btn text="Send" />
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default Contact;
