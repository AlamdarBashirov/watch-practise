import React from 'react'
import style from './Card.module.scss'

const Card = ({item}) => {
  return (
    <div className={style.card}>
        <img src={item.thumbnail} alt="" />
        <p>{item.title}</p>
        <p>${item.price}</p>
        <button>PRE ORDER</button>
    </div>
  )
}

export default Card