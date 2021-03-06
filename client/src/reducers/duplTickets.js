const ticketsInitialState = [] 

const dupTicketsReducer = (state = ticketsInitialState, action) => {
    switch(action.type){
        case 'DUP_TICKETS': {
            return [...action.payload]
        }
        case 'ADD_TICKET': {
            return [...state, action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default dupTicketsReducer