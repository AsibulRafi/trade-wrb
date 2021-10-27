import React, { useEffect } from "react"

import heroImg from "../images/heroImg.png"
import cardImg1 from "../images/cardImg1.png"
import cardImg2 from "../images/cardImg2.png"
import cardImg3 from "../images/cardImg3.png"
import cardImg4 from "../images/cardImg4.png"
import traderImg from "../images/traderImg.png"
import tradeNow from "../images/tradeNowImg.png"
import Slider from "../components/Slider"
import round from "../images/round.png"
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper container">
          <div className="hero__content">
            <h2>TRADE CFDs</h2>
            <p>FOREX / COMMODITIES / INDICES / SHARES / CRYPTO</p>
            <button className="hero__btn">GET STARTED</button>
          </div>
          <div className="hero__image">
            <img src={heroImg} alt="hero__image" />
          </div>
        </div>
      </section>
      {/* Trading */}
      <section className="trading">
        <div className=" trading__wrapper container">
          {/* Trading Heading */}
          <div className="trading__content">
            <h2 className="trading__content-h1">NO NAME1</h2>
            <h2 className="trading__content-h2">TRADING</h2>
            <hr />
            <p>
              Your goals are unique, so your investment guidance should be too.
              This is why at No name 1 we take the time to listen and understand
              what matters most to you before helping you develop and manage
              your investment strategy.
            </p>
          </div>
          {/* Trading Cards */}
          <div className="trading__cards">
            {/* Single Card */}
            <div className="trading__card trading__card-1">
              <div className="trading__card-img">
                <img src={cardImg1} alt="card1" />
              </div>
              <div className="trading__card-content tc1">
                <h4>INTUITIVE TOOLS AND COMPETITIVE PRICING</h4>
                <p>
                  Whether you’re an active trader or long-term investor our web,
                  mobile, and downloadable platforms give you everything you
                  need to research stocks, place trades, and manage your
                  portfolio with live-streaming access, real-time quotes and
                  specialists with years of floor trading experience. As an STP
                  (Straight Through Processing) broker, we do not have any
                  conflict of interest regarding our clients’ trades, as we only
                  receive a commission on the volume of the trades and do not
                  benefit in any additional way by any client losses.
                </p>
              </div>
            </div>
            {/* Single Card */}
            <div className="trading__card trading__card-2">
              <div className="trading__card-content tc2">
                <h4>TRANSPARENT AND TRUSTWORTHY</h4>
                <p>
                  For a few years now, No name 1 has been proud to help our
                  clients pursue their financial goals while giving them more
                  time to focus on what really matters in life. Everything we
                  provide, from guidance to powerful trading tools, to
                  retirement resources is built around one thing, you. We know
                  it's important to get professional guidance you can trust.
                  That's why our experienced, licensed reps are available by
                  phone, email, online, and in person for one-on-one support
                  when you need it most. You can always count on us.
                </p>
              </div>
              <div className="trading__card-img">
                <img src={cardImg2} alt="card2" />
              </div>
            </div>
            {/* Single Card */}
            <div className="trading__card trading__card-3">
              <div className="trading__card-img">
                <img src={cardImg3} alt="card3" />
              </div>
              <div className="trading__card-content tc3">
                <h4>SECURED FUNDS</h4>
                <p>
                  Your funds are kept in segregated 3rd party regulated
                  financial institutions and we use advanced encryption tools to
                  keep all of your transactions and personal data safe and
                  secured. Also our flat-rate commission on all online equity
                  trades gives you access to our award-winning investing and
                  trading experience. Plus, we keep our pricing simple with no
                  share limits or hidden fees, no trade requirements to access
                  advanced features, and no deposit minimums. At No name 1 all
                  transactions are simple and direct.
                </p>
              </div>
            </div>
            {/* Single Card */}
            <div className="trading__card trading__card-4">
              <div className="trading__card-content tc4">
                <h4>ALGO TRADING</h4>
                <p>
                  Algorithmic Trading is a program that offers everyone the
                  opportunity to trade with better precision and high success
                  rate than he/she would normally get. It makes use of a
                  scenario-based approach and artificial intelligence so as to
                  develop the best trading approach for the circumstances.
                  Different variables such as price, quantity and time period
                  are taken into serious consideration as well. The number of
                  traders that use our Algorithmic trading keeps increasing by
                  the day, as it makes the trading journey easy and
                  well-profiting.
                </p>
              </div>
              <div className="trading__card-img">
                <img src={cardImg4} alt="card4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trader Oriental */}
      <section
        className="trader"
        style={{ backgroundImage: `url(${traderImg})` }}
      >
        <div className="trader__wrapper container">
          <h2 className="trader__heading">TRADER ORIENTAL BROKER</h2>
          <p className="trader__text">
            No name 1 is a top online Forex broker with many years of experience
            in the market. No name 1 being a client-oriented company, places the
            needs of every one of our customers as its own priority. We are
            committed to providing all our investors a wide range of options
            when trading to help them become better at trading and also make
            profits.At No name 1 we ensure all our clients are up to date with
            the market trends and also provide them with latest trading
            technology and Forex tools by investing continuously in innovations.
            These instruments are updated on a regular basis thereby offering
            new platforms and services to answer the various questions and meet
            the need of every trader, in so doing; we are keeping our promise
            and commitment towards a fair and open trading.
          </p>
          <p className="trader__text">
            All our trusted clients have a 24/7 access to our various
            comprehensive educational materials. These materials help trader's
            understand and learn more about the various online operations,
            trading and the global market in general. We have a great customer
            support team which is always and readily available to assist with
            any issue you might encounter or challenge you might face in the
            course of trading.
          </p>
          <p className="trader__text">
            At No name 1 we place high importance and emphasis on customer
            satisfaction, and we are dedicated to being more than just an online
            broker to our clients. Make your trading experience worth it, choose
            a right broker, and choose No name 1!
          </p>
        </div>
      </section>
      {/* Trade Now Section */}
      <section className="trade container">
        <div className="trade__content">
          <h2>TRADE NOW</h2>
          <p>
            Trade Shares, Indices, Forex, Commodities and Cryptocurrencies with
            CFDs
          </p>
          <button className="trade__openAcc">Open-Account</button>
        </div>
        <div className="trade__img">
          <img src={tradeNow} alt="tradeImage" />
        </div>
      </section>
      {/* Slider */}
      <Slider />
      {/* Steps */}
      <section className="steps container">
        <div className="steps__wrapper">
          <h2 className="steps__heading">GET STARTED WITH US</h2>
          <hr className="steps__bottom" />
          <hr className="dotted" />
          <div className="steps__contents">
            {/* Single Steps */}
            <div className="steps__item1">
              <h1 className="steps__item1-number">1</h1>
              <img src={round} alt="roundShape" />
              <h4 className="steps__item1-heading">REGISTER</h4>
              <p className="steps__item1-text">
                Open your No name 1 Trading Account
              </p>
            </div>
            {/* Single Steps */}
            <div className="steps__item2">
              <h1 className="steps__item2-number">2</h1>
              <img src={round} alt="roundShape" />
              <h4 className="steps__item2-heading">VERIFY</h4>
              <p className="steps__item2-text">
                Verify your documents with our Compliance
              </p>
            </div>
            {/* Single Steps */}
            <div className="steps__item3">
              <h1 className="steps__item3-number">3</h1>
              <img src={round} alt="roundShape" />
              <h4 className="steps__item3-heading">FUND</h4>
              <p className="steps__item3-text">
                Deposit funds into your No name 1 trading account
              </p>
            </div>
            {/* Single Steps */}
            <div className="steps__item4">
              <h1 className="steps__item4-number">4</h1>
              <img src={round} alt="roundShape" />
              <h4 className="steps__item4-heading">TRADE</h4>
              <p className="steps__item4-text">
                Start trading Forex, Indices, Stocks and Commodities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
