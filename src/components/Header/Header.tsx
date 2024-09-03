import styles from './styles.module.css'
import { AiOutlineSearch } from "react-icons/ai";
import { BsSend } from "react-icons/bs";

const Header = () => {
  return (
    <nav className={styles.container}>
        <div className={styles.logo}>Find Employee</div>
        <form className={styles.search_div}>
          <AiOutlineSearch className={styles.search_icon}/>
          <input className={styles.search} type="search" placeholder='Search Employee by Name or Profession'/>
          <button type='submit' className={styles.search_button}>
            <span>Search</span>
            <BsSend className={styles.button_icon}/>
          </button>
        </form>
        <ul className={styles.nav_list}>
            <li className={styles.list_item}>Home</li>
            <li className={styles.list_item}>Idea</li>
            <li className={styles.list_item}>Contact Me</li>
        </ul>
    </nav>
  )
}

export default Header