import { combineReducers } from 'redux'
import keyswitchList from './KeyswitchList'
import keyswitchDetail from './KeyswitchDetail'
import printer from './Printer';
import keyboardShortcutState from './KeystrokeHistory';

const combinedReducer = combineReducers({
    keyboardShortcut: keyboardShortcutState,
    keyswitchList: keyswitchList,
    keyswitchDetail: keyswitchDetail,
    printer: printer
});

const rootReducer = combinedReducer;

export default rootReducer;
