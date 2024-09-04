import { useSelector } from 'react-redux'
import styles from './style.module.css'
import { RootState } from '../../app/store'

const Pagination = () => {
  const pageNumber = useSelector((state: RootState) => state.pagination.pageNumber)
  return (
    <div className={styles.container}>

    </div>
  )
}

export default Pagination