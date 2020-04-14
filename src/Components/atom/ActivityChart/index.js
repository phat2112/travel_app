import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import { ResponsiveStream } from "@nivo/stream";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Line } from 'react-chartjs-2'

const ActivityChart = () => {
  const data ={
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP','OCT', 'NOV', 'DEC'],
    datasets : [
      {
        label:'Visited Rate',
        backgroundColor: "#B06AB3",
        borderColor: 'transparent',
        pointRadius: 0,
        data: [180, 300, 260, 240, 270, 375, 580, 642, 580, 510, 500, 550]
      },
    ]
  }
  
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="activity-chart-container">
      <div className="title-chart">
        <h3>VISITING ACTIVITY</h3>
        <div className="filter-chart">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              This Month <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
      <Line 
        options={{
          responsive: true,
        }}
        data={data}
      />
    </div>
  );
};

ActivityChart.propTypes = {};

export default ActivityChart;
