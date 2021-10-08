import {all} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import {getDataWatcher} from "./dataSaga";
import {basketWatcher} from "./basketSaga"


function* rootSaga(){ //корневая
    yield all([
        getDataWatcher(),
        basketWatcher(),
    ])
}



const SagaMiddleware = createSagaMiddleware();


export {SagaMiddleware, rootSaga};