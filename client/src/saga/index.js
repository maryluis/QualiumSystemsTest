import {all} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import {getDataWatcher} from "./dataSaga";
import {basketWatcher} from "./basketSaga";
import {editWatcher} from "./editSaga";


function* rootSaga(){ 
    yield all([
        getDataWatcher(),
        basketWatcher(),
        editWatcher()
    ])
}



const SagaMiddleware = createSagaMiddleware();


export {SagaMiddleware, rootSaga};