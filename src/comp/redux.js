import React from 'react';
import  {createStore} from 'redux';

function counter(state=0, action){
	switch(action.type){
		case 'increment': return state+1;
		case 'decrement': return state-1;
		default:
		return state;
	}
}
let store = createStore(counter);
console.log('redux1');