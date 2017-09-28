import React from 'react' ;


class Category extends React.Component{
	render(){
		return (<tr><th>{this.props.cgr}</th></tr>);
	}
}

function ProductRow(props){
	return (<tr><td>{props.product.name}</td><td>{props.product.price}</td></tr>)
}



function ProductTable(props){
	var products = props.products;
}