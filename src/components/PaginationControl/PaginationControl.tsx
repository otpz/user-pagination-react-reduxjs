import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.css'
import { RootState } from '../../app/store'
import { useState } from 'react'
import { setNumberByClicking } from '../../features/pagination/pagination'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationControl = () => {

  const [page, setPage] = useState<number>(1)
  const pageNumber = useSelector((state: RootState) => state.pagination.pageNumber)
  
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value)
    setPage(value)
    dispatch(setNumberByClicking(value))
  }

  return (
    <div className={styles.container}>
      <Stack spacing={2}>
        <Pagination count={30} page={page} onChange={handleChange} color="primary"/>
      </Stack>
    </div>
  )
}

export default PaginationControl