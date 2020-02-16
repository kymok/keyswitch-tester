import React from 'react';
import { getKeyswitchData, getRandomKeySwitchData } from '../keyboard'

const randomLabel = 'ランダム'
const addToListLabel = 'リストに追加'
const keyswitchImages = require.context('../resources/images/keyswitch/', true)

const KeyswitchDetail = ({productId, addKeyswitch, showKeyswitch, enableAddButton}) => {

    const switchData = getKeyswitchData(productId);
    const imageUrl = switchData['imageUrl'] ? keyswitchImages('./' + switchData['imageUrl']) : require('./images/no_image.svg');
    const name = switchData['name'] || '';
    const manufacturer = switchData['manufacturer'] || ''
    const description = switchData['description'] || ''
    const reason = enableAddButton.reason || ''


    return (
        <div id="KeyswitchDetail">
            <div id="KeyswitchDetailControl">
                <input
                    className='btn'
                    type='button'
                    value={randomLabel}
                    onClick={() => {
                        showKeyswitch(getRandomKeySwitchData());
                        document.activeElement.blur();
                        }} />
                <input
                    className='btn'
                    type='button'
                    value={addToListLabel}
                    onClick={() => {
                        addKeyswitch(productId);
                        document.activeElement.blur();
                    }}
                    disabled={!enableAddButton.value? 'disabled' : ''} />
                
                
                <div className='reason'>{reason}</div>
            </div>

            <img src={ imageUrl } alt="switch"/>
            <div className='name'>{ name }</div>
            <div className='manufacturer'>{ manufacturer }</div>
            <div className='description'>{ description }</div>
        </div>
    );
}

export default KeyswitchDetail;