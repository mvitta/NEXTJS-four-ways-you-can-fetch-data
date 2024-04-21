'use client'

import useGetData from '@/hooks/useGetData'
import { Box, Pagination } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Menu } from '@/components'
import { Children, useState } from 'react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [r] = useGetData(currentPage)

  console.log({ r, currentPage })

  return (
    <>
      <main>
        <div>
          <h1 className='text-balance text-center text-2xl my-10 font-light'>
            Data Fetching <br />
            <small className=''>On the client, via a Route Handler</small>
          </h1>
        </div>
        <div>
          <div className='w-11/12 mx-auto'>
            <Pagination
              page={currentPage}
              count={r?.data?.info?.pages}
              variant='outlined'
              color='secondary'
              className='flex justify-center'
              onChange={(e, page) => {
                setCurrentPage(page)
                console.log(page)
              }}
            />
          </div>
          <Box
            sx={{
              height: 400,
              width: '90%',
              marginX: 'auto',
              marginTop: '3rem',
              marginBottom: '3rem',
            }}
          >
            <DataGrid
              columns={[
                { field: 'id', headerName: 'ID', width: 50 },
                { field: 'name', headerName: 'Name', width: 150 },
                { field: 'status', headerName: 'Status', width: 100 },
                { field: 'species', headerName: 'Species', width: 150 },
                { field: 'type', headerName: 'Type', width: 150 },
                { field: 'gender', headerName: 'Gender', width: 100 },
              ]}
              rows={r?.data?.results ?? []}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 10 },
                },
              }}
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </main>
    </>
  )
}
