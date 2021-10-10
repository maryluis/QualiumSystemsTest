import {takeLatest, put, call} from 'redux-saga/effects';
import { delay, getItemsTool} from "../tools";
import { actionPutData } from '../redux';

function* getDataWorker(data) {
    let queryData = data.data
    if(queryData.query.length > 0) {
        yield delay(1000);
    }
    let newData = yield call(() => getItemsTool(queryData.page, queryData.query, queryData.sortType));
    yield put(actionPutData(newData));
}



function* getDataWatcher(){ 
    yield takeLatest('GET_DATA', getDataWorker); 
}



export {getDataWatcher, getDataWorker};
