import React from 'react'
import style from './Footer.module.scss'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
      <div className={style.aboutUs}>
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
      </div>
      <div className={`${style.newsletter} ${style.aboutUs}`}>
            <h4>Newsletter</h4>
        <div className={style.details}>
            <p>Stay update with our latest</p>
            <div className={style.input}>
            <input type="email" placeholder='Enter Email' />
            <button><FaLongArrowAltRight /></button>
            </div>
        </div>
      </div>
      <div className={`${style.aboutUs} ${style.followUs}`}>
        <h4>Follow Us</h4>
        <div className={style.details}>
            <p>Let us be social</p>
            <div className={style.iconBox}>
            <FaFacebookF />
            <FaTwitter />
            <CiBasketball />
            <FaInstagram />
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
