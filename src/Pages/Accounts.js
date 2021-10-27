import React, { useEffect } from "react"
import Accordion from "../components/Accordion/Accordion"
import accountImg from "../images/accountsImg.png"
import accountInfo from "../images/accountsInfo.png"
const Accounts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="accounts__pricing">
        <div className="accounts__pricing-wrapper container__1">
          <div className="accounts__pricing-heading">
            <h2>TRADING ACCOUNTS</h2>
            <p>
              Our accounts provide benefits of Forex market to private and
              corporate clients, using one of the most advanced trading
              platforms available.
            </p>
          </div>
          <div className="accounts__pricing-content">
            <div className="accounts__pricing-section">
              {/* Mini */}
              <div className="mini">
                <h3 className="mini-heading">MINI</h3>
                <p className="mini-subheading">Basic Trading for Beginners</p>
                <h2 className="mini-price">$500</h2>
                <div className="mini-features">
                  {/*  Features */}
                  <div className="mini-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Online Chat Support</p>
                  </div>
                  <div className="mini-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Platforms: MT4 & Mobile</p>
                  </div>
                  <div className="mini-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Forex,CFDs&Commodities</p>
                  </div>
                  <div className="mini-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Free E-book</p>
                  </div>
                  <div className="mini-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Individual Competitive Spreads&commissionst</p>
                  </div>
                  <div className="mini-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Access to Breaking News& Market Research </p>
                  </div>
                </div>
                {/* End Features */}
                <button className="mini-btn">Open Account</button>
              </div>
              {/* Premium */}
              <div className="premium">
                <h3 className="premium-heading">Premium</h3>
                <p className="premium-subheading">
                  Advanced Trading For Experienced Investor
                </p>
                <h2 className="premium-price">$20000</h2>
                <div className="premium-features">
                  {/*  Features */}
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Online Chat Support</p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Platforms: MT4 & Mobile</p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Forex,CFDs&Commodities</p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Free E-book</p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Individual Competitive Spreads&commissionst</p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Access to Breaking News& Market Research </p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Online Phone Support </p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Real-Time Trading Signals</p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Trading Education Programe </p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p>Account Executive Team </p>
                  </div>
                  <div className="premium-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/FFFFFF/checked--v1.png"
                      alt="logo"
                    />
                    <p> Available 24/7 Trade Mentor</p>
                  </div>
                </div>
                {/* End Features */}
                <button className="premium-btn">Open Account</button>
              </div>
              {/* Classic */}
              <div className="classic">
                <h3 className="classic-heading">Classic</h3>
                <p className="classic-subheading">For Skilled Investors</p>
                <h2 className="classic-price">$5000</h2>
                <div className="classic-features">
                  {/*  Features */}
                  <div className="classic-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Online Chat Support</p>
                  </div>
                  <div className="classic-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Platforms: MT4 & Mobile</p>
                  </div>
                  <div className="classic-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Forex,CFDs&Commodities</p>
                  </div>
                  <div className="classic-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Free E-book</p>
                  </div>
                  <div className="classic-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Individual Competitive Spreads&commissionst</p>
                  </div>
                  <div className="classic-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Access to Breaking News & Market Research </p>
                  </div>
                  <div className="classic-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Online Phone Support </p>
                  </div>
                  <div className="classic-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Real-Time Trading Signals</p>
                  </div>
                  <div className="classic-features-single">
                    <img
                      src="https://img.icons8.com/ios-glyphs/20/51784F/checked--v1.png"
                      alt="logo"
                    />
                    <p>Trading Education Programe </p>
                  </div>
                </div>
                {/* End Features */}
                <button className="classic-btn">Open Account</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Accounts Steps */}
      <section className="accounts__steps container">
        <div className="accounts__steps-heading">
          <h2>
            Steps for opening a No Name 1 Trading Profile Opening a trading
            account at No name 1
          </h2>
        </div>
        <div className="accounts__steps-cards">
          <div className="accounts__steps-cards-single acc__card1">
            <div className="acc__steps-round">
              <h2>1</h2>
            </div>
            <h4>
              Pick the account types depending on your objectives and needs
            </h4>
            <p>
              Three available account types are supplemented with lots of
              additional features that bring some extra pluses to the investor.
              You can easily sign up for any of them.
            </p>
          </div>
          <div className="accounts__steps-cards-single acc__card2">
            <div className="acc__steps-round">
              <h2>2</h2>
            </div>
            <h4>Fill out the demanded information and confirm your identity</h4>
            <p>
              You just need to complete information profile with your personal
              data and to provide some identity papers.
            </p>
          </div>
          <div className="accounts__steps-cards-single acc__card3">
            <div className="acc__steps-round">
              <h2>3</h2>
            </div>
            <h4>Depositing money into your account</h4>
            <p>
              Once we approve and authorize your application, you will be able
              to make your payments and withdrawals swiftly.
            </p>
          </div>
        </div>
      </section>
      {/* Account Advantages */}
      <section
        className="accounts__advantages"
        style={{ backgroundImage: `url(${accountImg})` }}
      >
        <div className="accounts__advantages-wrapper container">
          <div className="accounts__advantages-heading">
            <h4>
              The unique No name 1 Account allows our clients to conduct trades
              perfectly protects them out of slow transaction times or
              information and payments errors.
            </h4>
          </div>
          <div className="accounts__advantages-content">
            <div className="accounts__advantages-1">
              <h4>Advantages:</h4>
              <p>
                There are few more additional benefits that are shaped exactly
                to satisfy our client’s needs. You can be sure in:
              </p>
              <div className="advantage__infos">
                <div className="advantage__info">
                  <img
                    src="https://img.icons8.com/ios-glyphs/20/000000/plus.png"
                    alt="plus"
                  />
                  <p>100% client orientated experience</p>
                </div>
                <div className="advantage__info">
                  <img
                    src="https://img.icons8.com/ios-glyphs/20/000000/plus.png"
                    alt="plus"
                  />
                  <p>
                    24/5 client support and help in dealing with the most common
                    issues
                  </p>
                </div>
                <div className="advantage__info">
                  <img
                    src="https://img.icons8.com/ios-glyphs/20/000000/plus.png"
                    alt="plus"
                  />
                  <p>Effective use of your capital</p>
                </div>
                <div className="advantage__info">
                  <img
                    src="https://img.icons8.com/ios-glyphs/20/000000/plus.png"
                    alt="plus"
                  />
                  <p>128 bit SSL Security Protocols</p>
                </div>
                <div className="advantage__info">
                  <img
                    src="https://img.icons8.com/ios-glyphs/20/000000/plus.png"
                    alt="plus"
                  />
                  <p>Convenient and client-friendly management of your funds</p>
                </div>
              </div>
            </div>
            <div className="accounts__advantages-2">
              <h4>When will a Senior Broker be assigned to me?</h4>
              <p>
                Your Personal Senior Broker will be assigned to you upon
                activating and funding your account.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Accounts Ways */}
      <section className="accounts__ways container">
        <div className="accounts__ways-heading">
          <h2>
            There are 3 different ways to fund <br />
            your No name 1
          </h2>
          <hr />
        </div>
        <div className="accounts__ways-content">
          <div className="accounts__ways-content-single">
            <img
              src="https://img.icons8.com/ios/100/51784F/bank-card-back-side.png"
              alt="creditcard"
            />
            <h4>Credit Card/Debit Card</h4>
            <p>
              The best way to fund your account is with a credit or debit card.
              The transfer is immediate and secure. Minimum transaction amount
              $250 with a maximum amount $500. Please not your card should be
              enabled for international transactions.
            </p>
          </div>
          <div className="accounts__ways-content-single">
            <img
              src="https://img.icons8.com/external-becris-lineal-becris/100/51784F/external-bank-banking-becris-lineal-becris-2.png"
              alt="bank"
            />
            <h4>Bank Draft</h4>
            <p>
              You can utilize your banks services and transfer funds using a
              bank draft. Please note that in some cases it might take up to 5
              days for your funds to clear.
            </p>
          </div>
          <div className="accounts__ways-content-single">
            <img
              src="https://img.icons8.com/ios-filled/100/51784F/refresh--v1.png"
              alt="transfar"
            />
            <h4>Wire Transfer</h4>
            <p>
              Please use the details provided by your Senior Broker. The minimum
              amount is $10.000 for bank wires. If you have online banking you
              can input the details provided online, or visit your bank and fill
              in the wire transfer form. Please remember to provide your Senior
              Broker the remittance slip. Depending on your bank your funds
              might take up to 5 days to clear. As soon as the funds are in your
              trading account you will receive an email notification.
            </p>
          </div>
        </div>
        <div className="accounts__ways__info">
          <div className="accounts__ways__info-text">
            <div className="withdrawFunds">
              <h4>Withdrawing Funds:</h4>
              <hr />
              <p>In order to submit a withdrawal request you need to:</p>
              <p>
                Log in to your account in your client area and submit a
                withdrawal request.
              </p>
              <p>
                Your request will be addressed and processed promptly. Usually,
                provided the account is verified the request is process within
                the next 2 business days. Depending on your bank, your funds
                might take longer to appear in your bank account.
              </p>
            </div>
            <div className="takeaccounts">
              <h4>Things you should take into account:</h4>
              <hr />
              <p>
                The initial amount invested will be returned through the same
                method deposited. If the requested amount exceeds the initial
                invested amount, you need to provide us with the bank account
                details of an account under your name, in order to receive the
                excess amount.
              </p>
              <p>
                For further inquiries regarding funding please contact us on
                support@no name 1.com or through our live chat.
              </p>
              <p>
                In case you would like to ask anything related to putting money
                on the Live Account, feel free to get in touch with a No name 1
                employee.
              </p>
            </div>
          </div>
          <div className="accounts__ways__info-img">
            <img src={accountInfo} alt="accountsInfo" />
          </div>
        </div>
      </section>
      <section className="accounts__faq container">
        <h2 className="accounts__faq-heading">ACCOUNTS FAQ’s</h2>
        <div className="accounts__faq-content">
          <Accordion />
        </div>
      </section>
    </>
  )
}

export default Accounts
