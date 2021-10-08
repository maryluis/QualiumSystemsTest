import {takeEvery, put, call, takeLatest} from 'redux-saga/effects';
import { getItemsTool, delay} from "../tools";
import { actionPutData, actionPutFilterData } from '../redux';

function* getDataWorker() {
    const data = yield call(getItemsTool);
    yield put(actionPutData(data));
}

function* filterDataWorker(data) {
    yield delay(1000);
    yield put(actionPutFilterData(data.filterString));
}

function* getDataWatcher(){ //watcher saga
    yield takeEvery('GET_DATA', getDataWorker); 
    yield takeLatest('FILTER_DATA', filterDataWorker)
}



export {getDataWatcher, getDataWorker};
