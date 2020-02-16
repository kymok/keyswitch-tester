const defaultState = {keyswitches: []}

const keyswitchList = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_SW':            
            // Do nothing if default
            if (action.productId === '') {
                console.log('Skipping default')
                return state;
            }

            // skip if item with the produckey already exists
            if (state.keyswitches.some(item => item.productId === action.productId)) {
                console.log(action.productId + ' already exists.');
                return state;
            }

            // Add item
            console.log('Added ' + action.productId);
            return Object.assign({}, state, {
                keyswitches: [
                    ...state.keyswitches,
                    {
                        id: action.id,
                        productId: action.productId
                    }
                ]
            });
        case 'REMOVE_SW':
            console.log('Removed ' + action.id);
            return Object.assign({}, state, {
                keyswitches: state.keyswitches.filter(item => item.id !== action.id)
            });
        case 'REMOVE_SW_ALL':
            console.log('Removed All Switches');
            return Object.assign({}, state, {
                keyswitches: []
            });
        default:
            break;
    }
    return state;
}

export default keyswitchList;