import { takeEvery, put, call, race, delay } from 'redux-saga/effects'
import { formatProducts } from '../printer/printer';
import { printerURL } from '../resources/printerSettings';

function postToPrinter(jsonString) {
    return fetch(printerURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonString,
    })
}

function* postToPrinterWithTimeout(jsonString, timeoutDelay=10000) {
    const {posts, timeout} = yield race({
        posts: call(postToPrinter, jsonString),
        timeout: delay(timeoutDelay),
    })

    if (posts) {
        // post
    }
    else {        
        // timeout.
        // May not be error (long print takes more than 10s).
        yield console.log('Printer Timeout.')
    }
}

function* printRequest(payload) {
    if(payload.items.length === 0) {
        yield console.log ('Nothing to print.')
    }
    else {
        yield put ({type: 'BLOCK_PRINTER'});

        const productIds = payload.items.map(item => item['productId']);
        const data = formatProducts(productIds);
        const jsonString = JSON.stringify(data);

        try {
            yield postToPrinterWithTimeout(jsonString);
        } catch (error) {
            yield console.log(error);
        } finally {
            yield put ({type: 'UNBLOCK_PRINTER'});
        }
        
    }
    
}

export function* watchPrintRequest() {
    yield takeEvery('PRINT_LIST', printRequest)
}