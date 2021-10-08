import {dataReducer, actionPutData, actionGetData} from "./dataReducer";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {SagaMiddleware, rootSaga} from "../saga";

const store = createStore(combineReducers({
    data: dataReducer,
}), applyMiddleware(SagaMiddleware))

SagaMiddleware.run(rootSaga)

export {store, dataReducer, actionPutData, actionGetData};


