import React from 'react'
import './leftbar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from './logo.png'

const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className='avatar-section'>
        <img src={logo} className='avatar' />
        <h2  style={{color:'black'}}>REEL IT COMMERCE</h2>
      </div><br/>
      <div className='option-bar'>
        <ul>
          <a href='#'><DashboardIcon sx={{mb:-1}}/>&nbsp;&nbsp;Dashboard</a>
          <a href='#'><ContactPageIcon sx={{mb:-1}}/>&nbsp;&nbsp;Contacts</a>
          <a href='#'><InsertChartIcon sx={{mb:-1}}/>&nbsp;&nbsp; Charts</a>
          <a href='#'><DonutSmallIcon sx={{mb:-1}}/>&nbsp;&nbsp;Statistics</a>
          <a href='#'><CalendarMonthIcon sx={{mb:-1}}/>&nbsp;&nbsp;Calendar</a>
          <a href='#'><DocumentScannerIcon sx={{mb:-1}}/>&nbsp;&nbsp;Documents</a>
          <br/><br/><br/>
          <a href='#'><LogoutIcon sx={{mb:-1}}/>&nbsp;&nbsp;Logout</a>
        </ul>


      </div>

    </div>
  )
}

export default Leftbar