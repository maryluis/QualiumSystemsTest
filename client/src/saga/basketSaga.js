import {takeLeading, put} from 'redux-saga/effects';
import { getItemsTool} from "../tools";
import { actionPutData, actionCartPut } from '../redux';

function* addToBasketWorker(data) {
    yield put(actionCartPut(data.data));
}

function* basketWatcher(){ //watcher saga
    yield takeLeading('CART_ADD', addToBasketWorker); //
}

export { basketWatcher};
