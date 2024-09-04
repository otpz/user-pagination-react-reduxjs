import styles from './styles.module.css'
import User from '../User/User'
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setByInput } from '../../features/userId/userIdSlice'

const UserList = () => {
  const {data, loading, error} = useFetch('https://dummyjson.com/users?limit=6&skip=0')

  const dispatch = useDispatch()

  const [activeUserId, setActiveUserId] = useState<number>(1)

  useEffect(() => {
    console.log(data.length)
  }, [data])

  const handleUserDetail = (id: number) => {
    setActiveUserId(id)
    dispatch(setByInput(id))
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