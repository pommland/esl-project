/*
This part of mirror will...
  - Stay on Top Right
  - display current time at current location(GMT+7)
*/

import React from 'react';
import Clock from 'react-live-clock';
import { Switch } from 'antd';
import moment from 'moment';
//import './time.css';

const ClockApp = () => {
  return (
    <div className="clock-app">
      <div className="time">
        <Clock format={"h:mm:ss a"} ticking={true} timezone={"GMT+7"} />
      </div>
      <div className="toggle-date">
        {moment().format('MMMM Do YYYY')}
      </div>
    </div>
  );
}

export default ClockApp;
