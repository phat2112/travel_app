import React from "react";
import './styles.scss';
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const PlacesChart = props => {
  const data = {
    datasets: [
      {
        data: [80, 35, 10],
        backgroundColor: ["#a8ff78", "#00B4DB", "#f80759"]
      }
    ]
  };
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
    <div className="chart-places-status">
      <div className="title-chart">
        <h3>IMPRESSIONS</h3>
        <h3>PLACES</h3>
        <div className="filter-chart">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              This month<DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="chart-status">
        <div className="chart-status-container">
          <Doughnut
            data={data}
            options={{
              cutoutPercentage: 80,
              responsive: true,
              maintainAspectRatio: true,
              animation: {
                  animationScale: true,
              }
            }}
          />
          <div className='chart-total-vote'>
            <p className='total-number'>846</p>
            <p>people voted</p>
          </div>
        </div>
        <div className="chart-status-detail">
          <span className='chart-status-text'>
            <p style={{color: '#a8ff78', paddingRight: 5 + 'px'}}>667</p> ENJOYED
          </span>
          <span className='chart-status-text'>
            <p style={{ color: '#00B4DB', paddingRight: 5 + 'px'}}>120</p> NEUTRAL
          </span>
          <span className='chart-status-text'>
            <p style={{ color: '#f80759', paddingRight: 5 + 'px'}}>49</p> NEGATIVE
          </span>
        </div>
      </div>
      <div className="places-container">
        <div className="bar-chart">
          <p>Pubs\Restaurants</p>
          <div className="bar-chart-container"></div>
        </div>
        <div className="bar-chart">
          <p>Museums/Theaters</p>
          <div className="bar-chart-container"></div>
        </div>
        <div className="bar-chart">
          <p>Sightseeing Tours</p>
          <div className="bar-chart-container"></div>
        </div>
        <div className="bar-chart">
          <p>Concerts</p>
          <div className="bar-chart-container"></div>
        </div>
      </div>
    </div>
  );
};

PlacesChart.propTypes = {};

export default PlacesChart;
