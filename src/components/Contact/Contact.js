import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import "./Contact.css";
import Btn from "../Btn/Btn";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  const MySwal = withReactContent(Swal);
  const [btnMessage, setBtMessage] = useState("Send");

  const formBase = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState(formBase);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setBtMessage("Sending");
    const message = validate(form.name, form.email, form.subject, form.message);
    const db = getFirestore();
    const contactFormCollection = collection(db, "contacts");
    if (message === "We will contact you as soon as possible") {
      addDoc(contactFormCollection, form)
        .then((snapshot) => {
          MySwal.fire({
            title: "Success",
            text: message,
            icon: "success",
            confirmButtonText: "Ok",
          });
          setForm(formBase);
          setBtMessage("Send");
        })
        .catch((err) => {
          MySwal.fire({
            title: "Error",
            text: "error sending your info",
            icon: "error",
            confirmButtonText: "Ok",
          });
          console.log(err);
        });
    } else {
      MySwal.fire({
        title: "Error",
        text: message,
        icon: "warning",
        confirmButtonText: "Ok",
      });
      setBtMessage("Send");
    }
  };

  let validate = (name, email, subject, message) => {
    if (!name || !email || !subject || !message) {
      return "Please fill all the fields";
    } else if (email.length < 14 || !email.includes(".")) {
      return "Check your email...";
    } else if (message.length < 8) {
      return "Your message might have at least 8 characters";
    } else {
      return "We will contact you as soon as possible";
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <main>
          <section className="contact-form">
            <h2 className="contactTitle">Contact Form</h2>
            <form action="" method="" onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(ev) => setForm({ ...form, name: ev.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(ev) =>
                    setForm({ ...form, email: ev.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={(ev) =>
                    setForm({ ...form, subject: ev.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={form.message}
                  onChange={(ev) =>
                    setForm({ ...form, message: ev.target.value })
                  }
                ></textarea>
              </div>
              <Btn text={btnMessage} />
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default Contact;
