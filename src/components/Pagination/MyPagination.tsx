import { Pagination } from '@mui/material'

export default function MyPagination() {
  return (
    <Pagination
      page={page}
      count={r?.data?.info?.pages}
      variant='outlined'
      color='secondary'
      className='flex justify-center'
      onChange={(e, page) => {
        setPage(page)
        console.log(page)
      }}
    />
  )
}
