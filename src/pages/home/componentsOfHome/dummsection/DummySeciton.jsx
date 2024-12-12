import React, { useEffect, useState } from 'react'
import style from './DummySection.module.scss'
import Card from '../../../../components/header/card/Card'
import axios from 'axios'

const DummySeciton = () => {
    
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(res => {
      setData(res.data.products)
    })
  }, [])

  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className = {style.headline}>
            <h1>Some Features that Made us Unique</h1>
            <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={style.cardBox}>
        {data && data.map(item => <Card item = {item}/>)}
        </div>
      </div>
    </div>
  )
}

export default DummySeciton
