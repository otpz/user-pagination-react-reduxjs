import styles from './styles.module.css'
import User from '../User/User'

const UserList = () => {

  return (
    <div className={styles.container}>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
    </div>
  )
}

export default UserList