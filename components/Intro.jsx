import Image from 'next/image'
import React from 'react'

import style from '../styles/intro.module.css'
import Circle from './Circle'

const Intro = () => {
  return (
    <div className={style.container}>
      <Circle backgroundColor="#37917b" top="-45vh" left="-45vh" />
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>AV0CAD0</span> DIGITAL PRODUCT
          AGENCY
        </h1>
        <p className={style.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
        <Image src={'/img/Avocado.png'} sizes="100vw" fill alt="" />
      </div>
    </div>
  )
}

export default Intro
