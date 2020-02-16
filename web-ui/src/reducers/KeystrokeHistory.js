const defaultState = {keystrokeHistory: []};

const keyboardShortcutState = (state=defaultState, action) => {

    switch (action.type) {
        case 'UPDATE_KEYSTROKE_HISTORY':
            state = Object.assign({}, state, {keystrokeHistory: action.keystrokeHistory});
            break;
        default:
            break;
    }
    return state;
}

export default keyboardShortcutState;