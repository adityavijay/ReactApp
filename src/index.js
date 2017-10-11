 import pme from './print.js';
 import './style.css';
 import Icon from './banner.png';
 import data12 from './data.json';
 import React from 'react';
 import ReactDOM from 'react-dom';
 import * as math456 from './comp/math.js';
 import clk from './comp/clock.js';
 import * as logInControl from './comp/loginControl.js';
 import * as temp from './comp/temperature.js';
 import * as HOC from './comp/HOCTest.js';
 import * as PT from './comp/productTable.js';
 import App from './comp/redux.js';
 
(function(){
	//clk1();
	ReactDOM.render(
	 <div><clk.Clock/><logInControl.LogInControl/><br/><temp.TemperatureConverter/><br/><HOC.SumFinal/><br/><HOC.SubFinal ad="qwe"/><br/><PT.FilterableProductTable/><App/></div>,
	  document.getElementById('root')
	);
})();