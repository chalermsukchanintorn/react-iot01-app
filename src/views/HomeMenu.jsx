import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'

function HomeMenu() {
  return (
    <>
      <Box sx={{height: '100vh', display: 'flex'}}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
          <Avatar src={'https://cdn.pixabay.com/photo/2023/03/13/15/21/iot-7850195_640.jpg'}
            sx={{ width: 150, height: 150, mx: 'auto' }} />
          <Typography variant='h3' sx={{ textAlign: 'center', mt: 2 }}>
            IoT Calculate by Ninnin SAU
          </Typography>
        </Box>
      </Box>

    </>
  )
}

export default HomeMenu