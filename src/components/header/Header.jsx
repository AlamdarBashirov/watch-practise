import React from 'react'
import style from './Header.module.scss'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src="https://preview.colorlib.com/theme/watch/img/logo.png" alt="" />
      </div>
      <div className={style.nav}>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">SERVICE</a></li>
            <li><a href="">UNIQUE FEATURE</a></li>
            <li><a href="">REVIEW</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">PAGES</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
