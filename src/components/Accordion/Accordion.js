import React, { useState } from "react"
import { Data } from "./data"
import { FiPlus, FiMinus } from "react-icons/fi"
const Accordion = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }

    setClicked(index)
  }
  return (
    <div className="accordion__section">
      <div className="accordion__container">
        {Data.map((item) => {
          return (
            <div key={item.id}>
              <div className="wrap" onClick={() => toggle(item.id)}>
                <h1>{item.question}</h1>
                <span>{clicked === item.id ? <FiMinus /> : <FiPlus />}</span>
              </div>
              {clicked === item.id ? (
                <div className="accordion__dropDown">
                  <p>{item.answer}</p>
                  <ul>
                    <li>{item.list1}</li>
                    <li>{item.list2}</li>
                    <li>{item.list3}</li>
                  </ul>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Accordion
