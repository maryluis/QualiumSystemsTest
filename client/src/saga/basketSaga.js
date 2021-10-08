import {takeLeading, put} from 'redux-saga/effects';
import { actionCartPut, actionCartPutDelete, actionCartPutClear } from '../redux';


function* addToBasketWorker(data) {
    yield put(actionCartPut(data.data));
}

function* deleteFromBasketWorker(data) {
    yield put(actionCartPutDelete(data.data))
}

function* clearBasketWorker() {
    yield put(actionCartPutClear())
}


function* basketWatcher(){ 
    yield takeLeading('CART_ADD', addToBasketWorker);
    yield takeLeading('CART_DELETE', deleteFromBasketWorker);  
    yield takeLeading('CART_CLEAR', clearBasketWorker); 
}

export { basketWatcher};
