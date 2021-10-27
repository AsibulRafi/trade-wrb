import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__links">
          <div className="footer__links-1">
            <h4>ABOUT</h4>
            <ul className="footer__links-list">
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About US
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 1000)}>
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-2">
            <h4>ACCOUNT</h4>
            <ul className="footer__links-list">
              <li>
                <Link to="/accounts">Trading Accounts</Link>
              </li>
              <li>
                <Link to="/accounts">Segregated Accounts</Link>
              </li>
              <li>
                <Link to="/accounts">Account Funding</Link>
              </li>
              <li>
                <Link to="/accounts">Account FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-3">
            <h4>PLATFORMS</h4>
            <ul className="footer__links-list">
              <li>
                <Link to="/platforms">Web Trader</Link>
              </li>
            </ul>
          </div>
          <div className="footer__links-4">
            <h4>RESOURSES</h4>
            <ul className="footer__links-list">
              <li>
                <Link to="/terms" onClick={() => window.scrollTo(0, 0)}>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/terms" onClick={() => window.scrollTo(0, 1500)}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__info">
          <h4 className="footer__info-header">RISK WARNING</h4>
          <hr />
          <div className="footer__info-text">
            <p>
              Trading in Forex and CFDs carries a high level of risk and can
              result in the loss of part or all of your investment. Trading in
              Forex and CFDs may not be appropriate for all investors. You
              should be aware of all the risks associated with Forex and CFD
              trading and seek for independent advice. Past performance does not
              constitute a reliable indication of future results. Forecasts for
              the future do not constitute a reliable indicator of future
              performance. Copyright for the pages and for the screens
              displaying the pages, and for the information, material and their
              arrangement, is owned by No name 1 all rights reserved.
            </p>
            <p>
              This information is intended for investors outside the United
              States who are not US/Japanese citizens and residents. This
              website is intended for informational purposes only. This website
              is not directed at any jurisdiction and is not intended for any
              use that would be contrary to local law or regulation. The
              products described on this are not offered and may not be sold in
              the United States/Japan or to US/Japanese citizens and residents.
            </p>
          </div>
        </div>
        <div className="copyright">
          <p>© 2021 ALL right reserved No Name 1</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
