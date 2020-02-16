import { isKeyIdValid, isProductIdValid, keymap } from "../keyboard";
import { takeEvery, put, select } from 'redux-saga/effects'

const defaultMatch = {matched: false};

const isHexDigitOrSpace = keycode => {
    return (
        keycode === 32 || // Space
        (keycode >= 48 && keycode <= 57) || // 0-9
        (keycode >= 65 && keycode <= 70)    // A-F
    );
}
const keyswitchMatcher = strokeHistory => {
    // Command always ends with space
    if (strokeHistory[strokeHistory.length-1] !== 32) {
        return defaultMatch;
    }

    // Check if command consists of three valid strokes incl. space
    const roi = strokeHistory.slice(-3).filter(isHexDigitOrSpace);
    if (roi.length !== 3) {
        return defaultMatch;
    }

    // Validate Key Id and Product Id
    const keyId = String.fromCharCode.apply(null, roi.slice(0, 2)).toLowerCase();

    // Match Keys
    if (!isKeyIdValid(keyId)) {
        return defaultMatch;
    }
    const productId = keymap(keyId);
    if (!isProductIdValid(productId)) {
        return defaultMatch;
    }
    return {
        matched: true,
        action: {
            type: 'SHOW_SW',
            productId: productId
        }
    }
}

const matchers = [keyswitchMatcher];

function* keyboardShortcut(payload) {

    // Construct new key history
    const state = yield select(state => state.keyboardShortcut);
    const newHistory = [...state.keystrokeHistory, payload.keystroke]

    // Apply matchers until match
    let matched = false
    for (const matcher of matchers) {
        let match = matcher(newHistory);
        if (match.matched) {
            matched = true;
            yield put(match.action);
            break;
        }
    }
    if (!matched) {
        // Record history if no match found
        yield put ({
            type: 'UPDATE_KEYSTROKE_HISTORY',
            keystrokeHistory: newHistory
        })
    }
}

export function* watchKeyboardShortcut() {
    yield takeEvery('KBD_SHORTCUT', keyboardShortcut);
}