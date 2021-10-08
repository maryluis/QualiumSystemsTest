import {takeLeading, put} from 'redux-saga/effects';
import {actionPutEdit, actionPutDelete} from "../redux";

function* editPutWorker(data) {
    yield put(actionPutEdit(data.data))
}

function* editDeleteWorker() {
    yield put(actionPutDelete())
}


export function* editWatcher(){ 
    yield takeLeading('EDIT', editPutWorker);
    yield takeLeading('DELETE', editDeleteWorker);  
}