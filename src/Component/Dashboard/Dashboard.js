import React from 'react'
// import "./Dashboard.css"
import ChartsPage from '../Graphs/ChartsPage'
export default function Dashboard({match}) {

  return (
  <>
    <div className='charts'>
      <ChartsPage />

    </div>
    <div className='table'>
      <h3 style={{color:'#be19ad',textAlign:'center'}}>Customer Order History</h3>
      <tr className='table-headings'>
        <td>NO</td>
        <td>Customer Id</td>
        <td> Name</td>
        <td>City</td>
        <td>Order Date</td>
        <td>Status</td>
        <td>Amount</td>
        </tr>

        <tr>
        <td>1</td>
        <td>#6545</td>
        <td>Ayush</td>
        <td>Ghotki</td>
        <td>6oct | 12:10pm</td>
        <td>Paid</td>
        <td>$65</td>
        </tr>

        <tr>
          <td>2</td>
          <td>#6545</td>
          <td>Vinay</td>
          <td>Dharaki</td>
          <td>6oct | 11:45am</td>
          <td>Painding</td>
          <td>$158</td>
        </tr>

        <tr>
          <td>3</td>
          <td>#6622</td>
          <td>Diway</td>
          <td>Lahore</td>
          <td>6oct | 11:45am</td>
          <td>Paid</td>
          <td>$98</td>
        </tr>
        <tr>
          <td>4</td>
          <td>#6622</td>
          <td>Diway</td>
          <td>Lahore</td>
          <td>6oct | 11:45am</td>
          <td>Paid</td>
          <td>$98</td>
        </tr>
      </div>
  </>
  )
}