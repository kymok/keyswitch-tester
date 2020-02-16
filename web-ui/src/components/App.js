import React from 'react';

import KeyboardShortcutListener from '../containers/KeyboardShortcutListener'
import KeyswitchDetail from '../containers/KeyswitchDetail';
import KeyswitchList from '../containers/KeyswitchList';

function App() {
    return (
        <div id="App">
            <KeyboardShortcutListener />
            <KeyswitchDetail/>
            <KeyswitchList />
        </div>
    );
}

export default App;
