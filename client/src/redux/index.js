import {dataReducer, actionPutData, actionGetData} from "./dataReducer";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {SagaMiddleware, rootSaga} from "../saga";
import {basketReducer, actionCartAdd, actionCartDelete, actionCartPut} from "./basketReducer"

const store = createStore(combineReducers({
    data: dataReducer,
    basket: basketReducer,
}), applyMiddleware(SagaMiddleware))

SagaMiddleware.run(rootSaga)

export {store, dataReducer, actionPutData, actionGetData, basketReducer, actionCartAdd, actionCartDelete, actionCartPut};


