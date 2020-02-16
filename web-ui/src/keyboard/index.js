const keymapData = require('../resources/KeymapData.json')
const switchData = require('../resources/SwitchData.json')

const allKeyIds = Object.keys(keymapData);
const allProductIds = Object.keys(switchData);
export const defaultProductId = ''
switchData[defaultProductId] = {}

// Keymap
export const isKeyIdValid = (keyId) => {
    return allKeyIds.includes(keyId);
}
export const keymap = (keyId) => {
    return (isKeyIdValid(keyId)? keymapData[keyId].productKey: defaultProductId);
}

// Switch Data
export const isProductIdValid = (productId) => {
    return allProductIds.includes(productId);
}
export const getKeyswitchData = (productId) => {
    return isProductIdValid(productId)? switchData[productId]: switchData[defaultProductId];
}
export const getRandomKeySwitchData = () => {
    const ids = allProductIds.filter(id => id !== defaultProductId)
    return ids[Math.floor(Math.random() * ids.length)];
}
