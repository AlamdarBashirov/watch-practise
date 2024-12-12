import React from 'react'
import style from './HighPerformance.module.scss'
import { IoRocketOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiBuildingsBold } from "react-icons/pi";
import { PiPhoneDisconnectLight } from "react-icons/pi";

const HighPerformance = () => {
  return (
    <div className={style.section}>
        <div className={style.headLine}>
        <h1>Top Courses That are open for Students</h1>
        <span>Top Courses That are open for Students</span>
        </div>
      <div className={style.container}>
        <div className={style.cardBox}>
            <div className={style.card}>
            <IoRocketOutline />
            <h4>High Performance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={style.card}>
            <IoSettingsOutline />
            <h4>High Performance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div>
            <img src="https://preview.colorlib.com/theme/watch/img/c1.png" alt="" />
        </div>
        <div className={style.cardBox}>
        <div className={style.card}>
            <PiBuildingsBold />
            <h4>High Performance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={style.card}>
        <PiPhoneDisconnectLight />
            <h4>High Performance</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HighPerformance
