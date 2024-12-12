import React from 'react'
import style from './SectionVideo.module.scss'

const SectionVideo = () => {
  return (
    <div className={style.container}>
      <div className={style.textBox}>
        <p className={style.blueText}>Brand new app to blow your mind</p>
        <h1>We’ve made a life <br />that will change you</h1>
        <span className={style.boldText}>We are here to listen from you deliver exellence</span>
        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <button>GET STARTED NOW</button>
      </div>
      <div className={style.video}>
        <img src="https://preview.colorlib.com/theme/watch/img/video-bg.png" alt="" />
      </div>
    </div>
  )
}

export default SectionVideo
