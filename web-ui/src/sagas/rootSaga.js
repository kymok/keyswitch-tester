import { all } from 'redux-saga/effects';
import { watchPrintRequest } from "./printer";
import { watchKeyboardShortcut } from './keyboardShortcut';

export default function* rootSaga() {
    yield all([
        watchPrintRequest(),
        watchKeyboardShortcut()
    ]);
}