import React from "react"
import aboutImg from "../images/aboutImg.png"
const About = () => {
  return (
    <>
      <section className="about">
        <div className="about__wrapper container">
          <div className="about__heading">
            <h2>WHO WE ARE?</h2>
            <h4>ABOUT US</h4>
          </div>
          <div className="about__content">
            <div className="about__content-1">
              <div className="about__content-text">
                <p>
                  No name 1 was launched a few years back with a unique vision
                  to provide unparalleled advanced trading conditions, advanced
                  education, and state-of-the-art trading tools in the forex
                  industry. Due to the continuous focus on localizing our
                  products and services to suit each market, together with our
                  successful collaboration with talented and experienced teams
                  from all over the world. No name 1 was quickly established as
                  the global trademark it is today.
                </p>
                <p>
                  Our number one mission is centered on time. By valuing time
                  and understanding the importance of efficiency in the
                  fluctuating, lightning-fast world of financial markets, every
                  decision we make is designed to ensure that our clients and
                  business partners, as well as our team of professionals,
                  invest their time wisely.
                </p>
              </div>
              <div className="about__content-img">
                <img src={aboutImg} alt="about" />
              </div>
            </div>
            <div className="about__content-2">
              <p>
                This road is paved by an ironclad focus on educating our
                customers. Knowledge is power, and empowering traders to get the
                best value for their investments is our passion.At No name 1 we
                are committed to making sure all our clients and investors stay
                connected to the various opportunities that arise in the market
                on a daily basis and ease in connecting with one another. With
                No name 1 has your financial stockbroker you are sure to get all
                the professional backing and support you require to soar in
                Forex trading.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section className="contact container">
        <h2 className="contact__heading">CONTACT US</h2>
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-single">
              <img
                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/50/51784F/external-message-contact-flatart-icons-solid-flatarticons.png"
                alt="message"
              />
              <div className="contact__info-single-text">
                <h4>Support email:</h4>
                <p>support@noname1.com</p>
              </div>
            </div>
            <div className="contact__info-single">
              <img
                src="https://img.icons8.com/material-rounded/50/51784F/clock.png"
                alt="clock"
              />
              <div className="contact__info-single-text">
                <h4>Monday to Friday</h4>
                <p>9.30-21.00 GMT</p>
              </div>
            </div>
            <div className="contact__info-single">
              <img
                src="https://img.icons8.com/ios-filled/50/51784F/phone.png"
                alt="phone"
              />
              <div className="contact__info-single-text">
                <h4>Telephone number:</h4>
                <p>+357 00 000 000</p>
              </div>
            </div>
          </div>
          <div className="contact__form">
            <form>
              <input type="text" name="Name" placeholder="Name" required />
              <input
                type="text"
                name="Email"
                placeholder="Email Address"
                required
              />
              <textarea placeholder="Send a Message"></textarea>
              <button className="contact__form-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
