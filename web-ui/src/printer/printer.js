import { getKeyswitchData } from '../keyboard';

const formatText = (text, param) => {
    return ({
        'text':text,
        ...param
    })
}

export const formatProduct = (data) => {
    return ([
        formatText('* ' + data.name),
        formatText('    [' + data.feel + (data.isSilent ? '/Silent' : '') + ']'),
        formatText('')
    ])
}

const header = useSingular => ([
    formatText('SELF MADE', {'double_width':true, 'justify':'C'}),
    formatText('KEYBOARDS', {'double_width':true, 'justify':'C'}),
    formatText('IN  JAPAN', {'double_width':true, 'justify':'C'}),
    formatText(''),
    formatText('Tsukuba Mini Maker Faire 2020', {'justify':'C'}),
    formatText('Key Switch Tester', {'justify':'C'}),
    formatText(''),
    formatText('--- --- ---', {'justify':'C'}),
    formatText(''),
    formatText(useSingular? 'Your choice:' : 'Your choices:', {'double_width':true, 'justify':'C'}),
    formatText(''),
])

const footer = [
    formatText('--- --- ---', {'justify':'C'}),
    formatText(''),
    formatText('HAPPY TYPING!', {'double_width':true, 'justify':'C'}),
    formatText(''),
    formatText(''),
    formatText('')
]

export const formatProducts = (productIds) => {   
    const isSingular = productIds.length === 1;
    const data = productIds.map(getKeyswitchData);
    const dataSorted = data.sort((a, b) => (a.name > b.name) ? 1 : -1)

    const body = dataSorted.map(formatProduct).flat()
    return({'lines':header(isSingular).concat(body).concat(footer)})
    
}