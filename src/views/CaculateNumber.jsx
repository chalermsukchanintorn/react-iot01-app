import React from 'react'
import { Box, Typography, Avatar, TextField } from '@mui/material'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'

function CaculateNumber() {
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 5 }}>
          <Avatar src={'https://cdn.pixabay.com/photo/2023/03/13/15/21/iot-7850195_640.jpg'}
            sx={{ width: 150, height: 150, mx: 'auto' }} />
          <Typography variant='h5' sx={{ textAlign: 'center', mt: 2 }}>
            เครื่องคิดเลข
          </Typography>
          <Typography sx={{ mt: 2 }}>
            ตัวเลขตัวที่ 1
          </Typography>
          <TextField variant="outlined" fullWidth type="number" />
          <Typography sx={{ mt: 2 }}>
            ตัวเลขตัวที่ 2
          </Typography>
          <TextField variant="outlined" fullWidth type="number" />
          <Typography sx={{ mt: 2 }}>
            เลือกเครื่องหมายคำนวณ
          </Typography>
          <FormControl fullWidth>
            <Select defaultValue={'+'}>
              <MenuItem value={'+'}>+ บวก</MenuItem>
              <MenuItem value={'-'}>- ลบ</MenuItem>
              <MenuItem value={'x'}>x คูณ</MenuItem>
              <MenuItem value={'÷'}>÷ หาร</MenuItem>
            </Select>
          </FormControl>
          <Button fullWidth variant='contained' sx={{ mt: 3, backgroundColor: '#e3Ad72', height: 50 }}>
            <Typography sx={{ textAlign: 'center' }}>
              คำนวณ
            </Typography>
          </Button>
          <Typography sx={{ textAlign: 'center', mt:4, color:'red', fontSize:100 }}>
            0.00
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default CaculateNumber