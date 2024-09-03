import React from 'react'
import styles from './styles.module.css'


const Header = () => {
  return (
    <nav className={styles.container}>
        <div className={styles.logo}>User Archives</div>
        <ul className={styles.nav_list}>
            <li className={styles.list_item}>Homepage</li>
            <li className={styles.list_item}>About</li>
            <li className={styles.list_item}>Contact Me</li>
        </ul>
    </nav>
  )
}

export default Header