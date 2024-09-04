import styles from './styles.module.css'
import User from '../User/User'
import useFetch from '../../hooks/useFetch'

const UserList = () => {

  const {data, loading, error} = useFetch('https://dummyjson.com/users?limit=6&skip=0')

  if (loading){
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading...</div>
      </div>
    )
  }

  if (error){
    return (
      <div className={styles.container}>
        <div className={styles.error}>Error.</div>
      </div>
    )
  }

  if(!data){
    return <div>Pending..</div>
  }

  return (
    <div className={styles.container}>
      {
        data.map((userData, idx) => {
          return (
            <User key={idx} userData={userData}/>
          )
        })
      }
    </div>
  )
}

export default UserList