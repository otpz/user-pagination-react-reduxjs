import React from 'react'
import styles from './styles.module.css'

const User = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.img_div}>
                <img className={styles.img} src="" alt="" />
            </div>
            <div className={styles.info}>
                <span>Osman Topuz</span>
                <span>Front-End Developer</span>
            </div>
            <div className={styles.contact}>
                <a className={styles.email} href="mailto: osmantopuz98@gmail.com"></a>
            </div>
        </div>
    </div>
  )
}

export default User