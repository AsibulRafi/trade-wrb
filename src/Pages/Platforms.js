import React, { useEffect } from "react"
import platformHero from "../images/platformHero.png"
const Platforms = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="platform__hero">
        <div className="platform__hero-wrapper container">
          <div className="platform__hero__content">
            <h2>WEB TRADER</h2>
            <p>
              No name 1 highest purpose is to turn its clients into successful
              traders and increase their success rates as much as possible. For
              that purpose we give you the No name 1 Online trader, which
              enables you to be 100% involved in the trading process and adjust
              according to the market conditions, all the while letting you plan
              your trading activities to your preference.
            </p>
            <p>
              Utilize the full scope of the latest technological developments in
              the field by trading from any internet connectible device.
              Investing in Forex, Commodities and CFD has never been easier
              thanks to the No name 1 Online Trader.
            </p>
            <button className="platform__hero__btn">WEB TRADER</button>
          </div>
          <div className="platform__hero__image">
            <img src={platformHero} alt="hero__image" />
          </div>
        </div>
      </section>
      <section className="platform container">
        <div className="platform__wrapper">
          <h4 className="platform__heading">
            Some of the other pros of the platform are:
          </h4>
          <div className="platform__content">
            <div className="platform__text">
              <p>
                No name 1 grants you a gateway to all your trading needs with
                the online and mobile trading applications. They are extremely
                intuitive and functional, enabling you to start a trade whenever
                you want, from anywhere in the world. In case you already have a
                trading account you can start a trade immediately.
              </p>
              <p>
                The No name 1 Online Trader present clients with the option to
                choose from a number of languages, it features the latest
                charts, fast operation of the trades, and best of all, it makes
                everything easy. You have the ability to access to trader from a
                number of different devices such as Apple or Android phone,
                tablet or PC. The platform is easy to use on every device and
                you can handle your investments with just a few clicks
              </p>
              <p>
                Due to the intuitiveness and easiness of use, the No name 1
                Online trader will make sure that you are fully informed about
                all trades that interest you. Stay knowledgeable on the latest
                market news and trends, without having to leave your couch.
              </p>
              <p>
                The financial market can be very volatile and the conditions can
                change in a matter of minutes. Therefore, you need to be able to
                react quickly in such cases. With the No name 1 Online Trader,
                you act accordingly and access your trades at any moment. The
                advantage is in your hands.
              </p>
              <p>
                With the hastened pace of modern life, you need to be constantly
                on the go, but the platform lets you combine that with your
                trading needs, without having to compromise. It`s accessible
                from any browser, there is no need for you to be stuck to any
                specific place. Be it in your office, or from a friend`s PC,
                logging into your account and trading or just checking something
                is quick and simple.
              </p>
              <p>Using No name 1 to trade is like a walk in the park.</p>
            </div>
            <div className="platform__feature">
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>Instant Execution</p>
              </div>
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>Automated Trading</p>
              </div>
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>Secure Application</p>
              </div>
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>Advanced charts availability</p>
              </div>
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>Slippage protection</p>
              </div>
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>3rd party bridging</p>
              </div>
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>Availability of four pending orders</p>
              </div>
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>Buy Limit, Buy Stop, Sell Limit, Sell Stop</p>
              </div>
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>0.01 lot sizes</p>
              </div>
              <div className="platform__feature-single">
                <img
                  src="https://img.icons8.com/material-rounded/30/51784F/checked-2--v1.png"
                  alt="tik box"
                />
                <p>Partial closing and many others</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="platform__cards container">
        <div className="platform__cards-single">
          <img
            src="https://img.icons8.com/ios-glyphs/50/51784F/test-account.png"
            alt="profile"
          />
          <h4>Have full control over your profile</h4>
        </div>
        <div className="platform__cards-single">
          <img
            src="https://img.icons8.com/ios-glyphs/50/51784F/performance-macbook.png"
            alt="perform"
          />
          <h4>Perform in-depth market analysis</h4>
        </div>
        <div className="platform__cards-single">
          <img
            src="https://img.icons8.com/ios/50/51784F/investment.png"
            alt="invest"
          />
          <h4>Invest in a wide selection of assets.</h4>
        </div>
      </section>
    </>
  )
}

export default Platforms
