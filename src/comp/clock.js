import React from 'react';

export class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state={date:new Date()};
	}	
	
	
	componentDidMount(){
		this.id = setInterval(()=>this.tick(),1000);
	}
	componentWillUnmount(){
		clearInterval(this.id);
	}
	
	tick(){
		this.setState({date:new Date()});
	}
	
	tostring(){
		console.log(12);
	}
	
	render(){
		return(
			<div>
				<h2>Time is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}