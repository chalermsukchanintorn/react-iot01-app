import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

function HomeMenu() {
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
          <Avatar src={'https://cdn.pixabay.com/photo/2023/03/13/15/21/iot-7850195_640.jpg'}
            sx={{ width: 150, height: 150, mx: 'auto' }} />
          <Typography variant='h5' sx={{ textAlign: 'center', mt: 2 }}>
            IoT Calculate by Ninnin SAU
          </Typography>

          <Link to={'/calnum'}>
            <Button fullWidth variant='contained' sx={{ mt: 2, backgroundColor: '#e30d72' }}>
              <Typography variant='h6' sx={{ textAlign: 'center' }}>
                Go to Calculate Number
              </Typography>
            </Button>
          </Link>

          <Button  component={Link} to={'/calmoneyshare'} fullWidth variant='contained' sx={{ mt: 2, backgroundColor: '#006533' }}>
            <Typography variant='h6' sx={{ textAlign: 'center' }}>
              Go to Calculate MoneyShare
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default HomeMenu