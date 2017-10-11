import React from 'react';
import  {createStore} from 'redux';
import {combineReducers} from 'redux';
import userReducer from '../reducers/users';
import selectedUserReducer from '../reducers/selectedUser';
import {Provider} from 'react-redux';
import UserList from '../containers/userList';
import SelectedUser from '../containers/selectedUser';

const allReducers = combineReducers({users: userReducer, currentUser: selectedUserReducer});

let store = createStore(allReducers);
/*
* 1. Here store is a center storage of states for the app(all containers and compoents inside them will be connected here). First instance of App instantiated from initial state of storage.
  2. This storage is synched through mapStateToProps function argument of connected function
  
  3. Any events dispatches some action to root reducer as argument, which passes to each reducer in to it and set a new state in storage. Which ultimately rerender component again because setstate happens
*/

var ReactApp=(props)=>{
	return<Provider store={store}> 
		<div>
			<div>Users List</div>
			<UserList/>
			<br/>
			<div>Selected User</div>
			<SelectedUser/>
		</div>	
	</Provider>			
};


var App=()=>{
	return <ReactApp store={store}/>
};
	
export default App;