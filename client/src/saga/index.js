import {all} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import {getDataWatcher} from "./dataSaga";


function* rootSaga(){ //корневая
    yield all([
        getDataWatcher(),
    ])
}



const SagaMiddleware = createSagaMiddleware();


export {SagaMiddleware, rootSaga};