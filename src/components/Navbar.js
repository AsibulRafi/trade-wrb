import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [navOpen, isNavOpen] = useState(false)
  const toggle = () => {
    isNavOpen(!navOpen)
  }
  return (
    <header>
      <nav className="nav">
        <div className="nav__wrapper">
          <div
            className={`${navOpen ? "nav__hamburger open" : "nav__hamburger"}`}
            onClick={toggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="nav__logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="nav__btns">
            <button className="log-in">Log-in</button>
            <button className="open-acc">Open-account</button>
          </div>
        </div>
      </nav>
      <div
        className={`${
          navOpen
            ? "nav__links has-fade fade-in"
            : "nav__links has-fade fade-out"
        }`}
      >
        <div className="nav__links-wrapper">
          <ul className="nav__links-lists">
            <li>
              <Link to="/accounts" onClick={toggle}>
                ACCOUNT
              </Link>
            </li>
            <li>
              <Link to="/platforms" onClick={toggle}>
                TRADING
              </Link>
            </li>
            <li>
              <Link to="/platforms" onClick={toggle}>
                PLATFORMS
              </Link>
            </li>
            <li>
              <Link to="/terms" onClick={toggle}>
                RESOURSES
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/platforms">
                <button className="wb-btn" onClick={toggle}>
                  Web Trader
                </button>
              </Link>
            </li>
            <li className="mb-nav__btns">
              <button className="mb-log-in">Log-in</button>
              <button className="mb-open-acc">Open-account</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
