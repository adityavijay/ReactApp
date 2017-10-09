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
 import * as PT from './comp/productTable.js';
 
(function(){
	ReactDOM.render(
	 <div><clk.Clock/><logInControl.LogInControl/><br/><temp.TemperatureConverter/><br/><HOC.SumFinal/><br/><HOC.SubFinal ad="qwe"/><br/><PT.FilterableProductTable/></div>,
	  document.getElementById('root')
	);
})();



/* 	
import { combineReducers } from 'redux';
import {bindActionCreators} from react-redux;
import {selectUser} from '../actions/index';

function matchDispatchToProps(dispatch){
	return bindActionCreators({selectUser: selectUser},dispatch)
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}
*/