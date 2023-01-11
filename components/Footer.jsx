import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import style from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>DBM CREATIVES.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link}>
            <>
              <span className={style.linkText}>WORK WITH US</span>
              <Image src={'/img/link.png'} width="40" height="40" alt="" />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          45 ADAM STREET,
          <br /> USA
        </div>
        <div className={style.cardItem}>
          CONTACT@DBM.DEV
          <br /> 111_438_5244
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={style.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  )
}

export default Footer
