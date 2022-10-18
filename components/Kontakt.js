import { useState, useRef } from "react";
import Head from "next/head";
import { Formik } from "formik";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import image from "./img/glowna-3.jpg";
import mail from "./img/mail.png";
import phone from "./img/call.png";
import emailjs from '@emailjs/browser';

const Kontakt = () => {
  const formikRef = useRef()
  const [isFromSent, setFormSent] = useState(false);

  const sendEmail = (values) => {
    emailjs.sendForm('service_kyl616k', 'template_2mabw5r', values, 'L1NcpDdx__lTvs0mS')
      .then((result) => {
        if (result.text === 'OK') {
          setFormSent(true);
        }
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div>
      <Head>
        <title>Katowicka 39 - kontakt</title>
      </Head>
      <Navbar />
      <div
        className="hero"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
      <main className="container contact about-text">
        <div className="row">
          <div className="col">
            <img src={phone.src} className="email-image" alt="" />
            <p>tel. 510-141-380</p>
          </div>
          <div className="col">
            <img src={mail.src} className="email-image" alt="" />
            <p>biuro@katowicka39.pl</p>
          </div>
        </div>
        <h2>Formularz kontaktowy</h2>
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            setTimeout(() => {
              try {
                sendEmail(formikRef.current)
              } catch (error) {
                console.log(error);
              }
            }, 1000)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} ref={formikRef}>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Podaj swój email"
                  className={errors.email && touched.email && "error-red"}
                />
                <input
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Podaj swoje imię"
                />
              </div>
              <div className="form-row">
                <textarea
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Wpisz swoją wiadomość"
                />
              </div>
              <div className="form-row">
                <button
                  type="submit"
                  className="send-button"
                  disabled={isSubmitting}
                >
                  Wyślij
                </button>
              </div>
              {isFromSent && (
                <p className="sent-message">
                  Wiadomość została wysłana. Dziękujemy!
                </p>
              )}
            </form>
          )}
        </Formik>
        <p style={{ marginTop: 60 }}>Aranżacje wnętrz przygotowala: Anna Morawiec-Malec</p>
        <p>projekty@smdesign.com.pl</p>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
