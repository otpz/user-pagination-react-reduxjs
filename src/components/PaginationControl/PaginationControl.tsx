import { useDispatch } from 'react-redux'
import styles from './style.module.css'
import { useState } from 'react'
import { setNumberByClicking } from '../../features/pagination/pagination'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationControl = () => {

  const [page, setPage] = useState<number>(1)
  
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    dispatch(setNumberByClicking(value))
  }

  return (
    <div className={styles.container}>
      <Stack spacing={2}>
        <Pagination count={30} className={styles.pagination_style} page={page} onChange={handleChange} color="primary"/>
      </Stack>
    </div>
  )
}

export default PaginationControl