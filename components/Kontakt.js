import { useState } from "react";
import Head from "next/head";
import { Formik } from "formik";
import Navbar from "./custom/Navbar";
import Footer from "./custom/Footer";
import image from "./img/glowna-3.jpg";
import mail from "./img/mail.png";

const Kontakt = () => {
  const [isFromSent, setFormSent] = useState(false);
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
      <main className="container about-text">
        <h2>Kontakt</h2>
        <div className="row">
          <div className="col">
            <h3>Leszek Bagnicki</h3>
            <p>tel. 692-445-674</p>
          </div>
          <div className="col">
            <h3>Joanna Idzi</h3>
            <p>tel. 692-445-670</p>
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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify(values),
              })
                .then(response => response.json())
                .then(data => data.status === 'Ok' && setFormSent(true));

              setSubmitting(false);
            }, 400);
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
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="send-button" disabled={isSubmitting}>
                Wyślij
              </button>
              {isFromSent && <p className="sent-message">Wiadomość została wysłana. Dziękujemy!</p>}
            </form>
          )}
        </Formik>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
