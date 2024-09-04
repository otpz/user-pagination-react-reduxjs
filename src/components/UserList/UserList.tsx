import styles from './styles.module.css'
import User from '../User/User'
import useFetch from '../../hooks/useFetch'
import { useState } from 'react'

const UserList = () => {

  const {data, loading, error} = useFetch('https://dummyjson.com/users?limit=6&skip=0')

  const [activeUserId, setActiveUserId] = useState<number>(1)

  const handleUserDetail = (id: number) => {
    console.log("user id:", id)
    setActiveUserId(id)
  }

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
  return (
    <div className={styles.container}>
      {
        data.map((userData, idx) => {
          return (
            <div key={idx} onClick={() => handleUserDetail(userData.id)}>
              <User userData={userData} activeUserId={activeUserId}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default UserList