import React from 'react'
import style from './IntroSection.module.scss'

const IntroSection = () => {
  return (
    <div className={style.container}>
      <div className={style.textBox}>
        <h4>Now you can feel the Heat</h4>
        <h1>Smart New Future</h1>
        <button>BUY NOW</button>
      </div>
    </div>
  )
}

export default IntroSection
