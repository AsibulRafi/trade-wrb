import React, { useEffect, useState } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import sliderImg1 from "../images/sliderImg1.png"
import sliderImg2 from "../images/sliderImg2.png"
import sliderImg3 from "../images/sliderImg3.png"
const Slider = () => {
  const data = [
    {
      id: 1,
      heading: "TAKE ON THE MARKET WITH OUR INNOVATIVE POWERFUL PLATFORMS",
      image: sliderImg1,
      btn: "TRY IT FOR FREE",
    },
    {
      id: 2,
      heading:
        "THE FINANCIAL MARKET CAN BE VERY VOLATILE - CONTROL IT WITH OUR WEBTRADER",
      image: sliderImg2,
      btn: "START TRADE",
    },
    {
      id: 3,
      heading: "24 hours by TEAM VIEWER",
      image: sliderImg3,
      btn: "CLICK HERE",
    },
  ]
  const [info] = useState(data)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const lastIndex = info.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, info])
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])
  return (
    <section className="slider__section">
      {info.map((slide, sliderIndex) => {
        const { id, heading, btn, image } = slide
        let position = "nextSlide"
        if (sliderIndex === index) {
          position = "activeSlide"
        }
        if (
          sliderIndex === index - 1 ||
          (index === 0 && sliderIndex === info.length - 1)
        ) {
          position = "lastSlide"
        }
        return (
          <article className={position} key={id}>
            <div
              className="slider"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="slider__wrapper container">
                <h4>{heading}</h4>
                <button className="slider__btn">{btn}</button>
                <div className="slider__control">
                  <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                  </button>
                  <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Slider
