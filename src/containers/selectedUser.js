import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {setActive} from '../actions/actions';

class SelectedUser extends Component{
	render(){
		var selectedUser = this.props.selectedUser != null? this.props.selectedUser.selectedUser.Firstname: "None Selected";
		return <div>{selectedUser}</div>
	}
}


var mapStateToProps=(state)=>{
	return {selectedUser: state.currentUser};
}


export default connect(mapStateToProps)(SelectedUser);