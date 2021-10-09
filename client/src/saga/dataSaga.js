import {takeEvery, put, call} from 'redux-saga/effects';
import { getItemsTool} from "../tools";
import { actionPutData } from '../redux';

function* getDataWorker(data) {
    let queryData = data.data
    let newData = yield call(() => getItemsTool(queryData.page, queryData.query, queryData.sortType));
    yield put(actionPutData(newData));
}



function* getDataWatcher(){ //watcher saga
    yield takeEvery('GET_DATA', getDataWorker); 
}



export {getDataWatcher, getDataWorker};
