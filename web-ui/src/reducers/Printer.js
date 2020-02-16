const defaultState = {'isBlocked': false}

const printer = (state=defaultState, action) => {
    switch (action.type) {
        case 'BLOCK_PRINTER':
            return Object.assign({}, state, {
                'isBlocked': true
            })
        case 'UNBLOCK_PRINTER':
            return Object.assign({}, state, {
                'isBlocked': false
            })
        default:
            break;
    }
    return state;
}

export default printer;