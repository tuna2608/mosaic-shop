import React from 'react'
import AdminNavBar from "../../../components/admin/adminNavbar/AdminNavBar"
import AdminLeftBar from "../../../components/admin/adminLeftBar/AdminLeftBar"
import "./adminHome.scss"
import NewMembers from '../../../components/admin/newMembers/NewMembers'
import LatestTransactions from '../../../components/admin/latestTransactions/LatestTransactions'
import FeaturedItem from '../../../components/admin/featuredItems/FeaturedItem'
import Chart from '../../../components/admin/chart/Chart'
import { userData } from "../../../data/chartData"

export function AdminHome() {
  return (
    <div className='admin-home-container'>
      <AdminNavBar />
      <div className='bottom'>
        <AdminLeftBar />
        <div className='bottom-right'>
          <FeaturedItem />
          <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
          <div className='data'>
            <NewMembers />
            <LatestTransactions />
          </div>
        </div>
      </div>
    </div>
  )
}

