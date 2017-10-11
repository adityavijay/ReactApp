export default function(state=null, action){
	switch(action.type){
		case "setActive": return{selectedUser:action.user};
		default: return state;
	}
}
