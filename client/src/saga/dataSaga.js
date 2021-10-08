import {all, takeEvery, put, call} from 'redux-saga/effects';
import { getItemsTool} from "../tools";
import { actionPutData } from '../redux';
import createSagaMiddleware from "redux-saga";

function* getDataWorker() {
    const data = yield call(getItemsTool);

    yield put(actionPutData(data));
}

function* getDataWatcher(){ //watcher saga
    yield takeEvery('GET_DATA', getDataWorker); //
}

export {getDataWatcher, getDataWorker};
