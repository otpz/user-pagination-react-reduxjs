import styles from './styles.module.css'
import User from '../User/User'
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setByInput } from '../../features/userId/userIdSlice'
import { RootState } from '../../app/store'

const UserList = () => {
  const pageNumber = useSelector((state: RootState) => state.pagination.pageNumber)
  const searchInputText = useSelector((state: RootState) => state.searchInput.text)
  const [url, setUrl] = useState<string>(`https://dummyjson.com/users?limit=${6}&skip=${6*(pageNumber-1)}`)

  useEffect(() => {
    if(searchInputText){
      setUrl(`https://dummyjson.com/users/search?q=${searchInputText}`)
    } else {
      setUrl(`https://dummyjson.com/users?limit=${6}&skip=${6*(pageNumber-1)}`)
    }
  }, [searchInputText, pageNumber])

  const {data, loading, error} = useFetch(url)

  const dispatch = useDispatch()

  const [activeUserId, setActiveUserId] = useState<number>(1)

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
        data
        .filter((userData, idx) => { // if search text exist, filter data
          if (searchInputText){
            return idx >= 6*(pageNumber-1) && idx < 6*pageNumber
          } else {
            return userData
          }
        })
        .map((userData, idx) => {
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