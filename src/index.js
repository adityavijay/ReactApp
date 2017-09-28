 import pme from './print.js';
 import './style.css';
 import Icon from './banner.png';
 import data12 from './data.json';
 import React from 'react';
 import ReactDOM from 'react-dom';
 import * as math456 from './comp/math.js';
 import * as clk from './comp/clock.js';
 import * as logInControl from './comp/loginControl.js';
 import * as temp from './comp/temperature.js';
 import * as HOC from './comp/HOCTest.js';

(function(){
	ReactDOM.render(
	 <div><clk.Clock/><logInControl.LogInControl/><br/><temp.TemperatureConverter/><br/><HOC.SumFinal/><br/><HOC.SubFinal ad="qwe"/></div>,
	  document.getElementById('root')
	);
})();



