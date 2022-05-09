import React from 'react'
import Chart from '../../components/chart/Chart';
import Featuredinfo from '../../components/featuredInfo/Featuredinfo';
import "./home.css";
import { userData } from '../../DummyData';

function Home() {
  return (
   <div className="home">

      <Featuredinfo/>
      <Chart data={userData} dataKey="Active Users" title="User Analytics" grid/>
      
   </div>
  )
}

export default Home
