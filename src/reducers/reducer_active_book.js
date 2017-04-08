// State argument is not application state...only the state this reducer
// is responsible for. Other reducer's states are not applicable to this one

// State needs to have a default in case of initial load...otherwise it's undefined
// which is not allowed by Redux

// ES6 SYNTAX! in the argument for state you can specify a default
// in this case state=null


export default function(state=null, action) {
   // if the action.type is BOOK_SELECTED...return the payload
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state;
}