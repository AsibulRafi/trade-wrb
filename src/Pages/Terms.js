import React, { useState } from "react"
import PrivacyContent1 from "../components/Privacy/PrivacyContent1"
import PrivacyContent2 from "../components/Privacy/PrivacyContent2"
import TermsContent1 from "../components/Terms/TermsContent1"
import TermsContent2 from "../components/Terms/TermsContent2"
import TermsContent3 from "../components/Terms/TermsContent3"
import TermsContent4 from "../components/Terms/TermsContent4"
import TermsContent5 from "../components/Terms/TermsContent5"
import TermsContent6 from "../components/Terms/TermsContent6"
import TermsContent7 from "../components/Terms/TermsContent7"

const Terms = () => {
  const [readMore, setIsReadMore] = useState(false)
  const toggle = () => {
    setIsReadMore(!readMore)
  }

  return (
    <>
      <section className="terms">
        <div className="terms__wrapper container">
          <div className="terms__heading">
            <h4>Agreement</h4>
            <h2>Terms of Service</h2>
          </div>
          <div className="terms__content">
            <div className="terms__content-scroll">
              <TermsContent1 />
              <TermsContent2 />
              <TermsContent3 />
              <TermsContent4 />
              <TermsContent5 />
              <TermsContent6 />
              <TermsContent7 />
            </div>
          </div>
          <div className="terms__btns">
            <button className="terms__btn1">Not Right Now...</button>
            <button className="terms__btn2">I agree with Terms...</button>
          </div>
        </div>
      </section>
      {/* Privacy Policy */}
      <section className="privacy container">
        <div className="privacy__heading">
          <h2>Privacy Policy</h2>
          <hr />
        </div>
        <div className="privacy__content">
          <PrivacyContent1 />
          <PrivacyContent2 readMore={readMore} />
          <button className="readMore" onClick={toggle}>
            {readMore ? "Show Less..." : "Read More ..."}
          </button>
        </div>
        <div className="privacy__btn">
          <button className="privacy__btn1">CANCEL</button>
          <button className="privacy__btn2">CONFIRM</button>
        </div>
      </section>
    </>
  )
}

export default Terms
