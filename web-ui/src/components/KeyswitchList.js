import React from 'react'
import KeyswitchListItem from './KeyswitchListItem'

const printLabel = 'リストを印刷'
const clearLabel = 'すべて削除'

const KeyswitchList = ({keyswitches, removeItem, removeAll, printList, isPrinterBlocked}) => {
    return (
        <div id="KeyswitchList">
            <div id="KeyswitchListControl">
                <input
                    className='btn'
                    type="button"
                    value={printLabel}
                    onClick={() => {printList(keyswitches); document.activeElement.blur();}}
                    disabled={isPrinterBlocked ? 'disabled' : ''}
                />
                <input
                    className='btn btn-danger'
                    type="button"
                    value={clearLabel}
                    onClick={() => {removeAll(); document.activeElement.blur();}}
                />
            </div>
            <div id="KeyswitchListContent">
                <ul>
                    {keyswitches.map(
                        sw => (<KeyswitchListItem key={sw.id} removeItem={() => removeItem(sw.id)} {...sw}/>)
                    )}
                </ul>
            </div>
            
        </div>
    )
}

export default KeyswitchList;