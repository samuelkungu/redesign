import React from 'react'
import Chart from '../../components/chart/Chart';
import Featuredinfo from '../../components/featuredInfo/Featuredinfo';
import "./home.css";
import { userData } from '../../DummyData';
import WidgetSm from '../../components/widgets/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgets/widgetLg/WidgetLg';

function Home() {
  return (
   <div className="home">

      <Featuredinfo/>
      <Chart data={userData} dataKey="Active Users" title="User Analytics" grid/>
      
      <div className="home-widgets">
            <WidgetSm/>
            <WidgetLg/>
      </div>

   </div>
  )
}

export default Home
