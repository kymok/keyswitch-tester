/* List */
let nextId = 0
export const addKeyswitch = productId => ({
    type: 'ADD_SW',
    id: nextId++,
    productId
})

export const removeKeyswitch = id => ({
    type: 'REMOVE_SW',
    id
})

export const removeAllKeyswitches = () => ({
    type: 'REMOVE_SW_ALL'
})


/* Detail View */
export const showKeyswitch = productId => ({
    type: 'SHOW_SW',
    productId
})


/* Key Strokes */
export const handleKeystroke = keystroke => ({
    type: 'KBD_SHORTCUT',
    keystroke
})

/* Print */
export const printKeyswitchList = items => ({
    type: 'PRINT_LIST',
    items
})