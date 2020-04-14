import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Bar } from "react-chartjs-2";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const WarningChart = props => {
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
      const data = {
        labels:['Bad Roads', 'ParkingOverload', 'Expensive Gas', 'Road Crime', 'Bad Food' ],
          datasets:[
              {
                  label:'warnings',
                  data: [20, 70, 40, 60, 10],
                  backgroundColor: ['red', 'yellow', 'green', 'blue', 'grey']
              }
          ]
      }

    return (
        <div className='warning-charts'>
            <div className="title-chart">
                <h3>WARNINGS</h3>
                <div className="filter-chart">
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        This month <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className="warning-chart-container">
                <Bar data={data}/>
            </div>
        </div>
    );
};

WarningChart.propTypes = {
    
};

export default WarningChart;