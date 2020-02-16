import React from 'react'
import { getKeyswitchData } from '../keyboard'
const keyswitchImages = require.context('../resources/images/keyswitch/', true)

function KeyswitchListItem({productId, removeItem}) {
    const switchData = getKeyswitchData(productId);
    const imageUrl = switchData['imageUrl']? keyswitchImages('./' + switchData['imageUrl']) : require('../components/images/no_image.svg');
    return (        
        <li className="KeyswitchListItem">
            <img className='remove-btn' src={require('../components/images/close.svg')} alt='close' onClick={removeItem}/>
            <img src={imageUrl} alt="switch"/>
            <span>{switchData['name']}</span>
        </li>
    )
}

export default KeyswitchListItem