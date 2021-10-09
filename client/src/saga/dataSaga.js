import {takeEvery, put, call} from 'redux-saga/effects';
import { getItemsTool} from "../tools";
import { actionPutData } from '../redux';

function* getDataWorker(data) {
    let queryData = data.data
    let newData = yield call(() => getItemsTool(queryData.page, queryData.query, queryData.sortType));
    yield put(actionPutData(newData));
}

// function* filterDataWorker(data) {
//     yield delay(1000);
//     yield put(actionPutFilterData(data.data));
// }

function* getDataWatcher(){ //watcher saga
    yield takeEvery('GET_DATA', getDataWorker); 
    // yield takeLatest('FILTER_DATA', filterDataWorker)
}



export {getDataWatcher, getDataWorker};
