import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Parlons de vos plans pour moi</h3>
          <p className="contact__details">
            Vous n'aimez pas les formulaires ? Envoyez-moi un email 😊
          </p>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact__form"
        >
          <input
            type="hidden"
            name="access_key"
            value="c2d7a2a7-bf3e-446f-8e7c-f8e96e7e152f"
          />

          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                name="last_name"
                type="text"
                className="contact__form-input"
                placeholder="Votre Nom"
              />
            </div>

            <div className="contact__form-div">
              <input
              name="email"
                type="email"
                className="contact__form-input"
                placeholder="Votre Email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
            name="subject"
              type="text"
              className="contact__form-input"
              placeholder="Objet"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Rédigez votre message..."
            ></textarea>
          </div>

          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <button type="submite" className="btn">
            <a className="btn__send">
              Envoyer le message
            </a>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
