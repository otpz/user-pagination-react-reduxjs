import styles from './styles.module.css'
import SearchForm from '../SearchForm/SearchForm';

const Header = () => {
  return (
    <nav className={styles.container}>
        <div className={styles.logo}>Find Employee</div>
        <SearchForm/>
        <ul className={styles.nav_list}>
            <li className={styles.list_item}>Home</li>
            <li className={styles.list_item}>Idea</li>
            <li className={styles.list_item}>Contact Me</li>
        </ul>
    </nav>
  )
}

export default Header