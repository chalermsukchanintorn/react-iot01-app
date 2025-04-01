//rfce , rfc
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CssBaseline} from '@mui/material'
import HomeMenu from './views/HomeMenu'
import CalculateNumber from './views/CaculateNumber'
import CalculateMoneyShare from './views/CalucalteMoneyShare'


function App() {
  return (
    <>
      {/* ใช้  CssBaseline เพื่อ reset รูปแบบ css ทั้งหมด */}
      <CssBaseline />      
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<HomeMenu />} /> 
          <Route path="/calnum" element={<CalculateNumber />} /> 
          <Route path="/calmoneyshare" element={<CalculateMoneyShare />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App