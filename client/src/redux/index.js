import {dataReducer, actionPutData, actionGetData, actionFilterData, actionPutFilterData} from "./dataReducer";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {SagaMiddleware, rootSaga} from "../saga";
import {basketReducer, actionCartAdd, actionCartDelete, actionCartPut, actionCartPutDelete, actionCartPutClear, actionCartClear} from "./basketReducer"

const store = createStore(combineReducers({
    data: dataReducer,
    basket: basketReducer,
}), applyMiddleware(SagaMiddleware))

SagaMiddleware.run(rootSaga)

export {store, dataReducer, actionPutData, actionGetData, basketReducer, actionCartAdd, actionCartDelete, actionCartPut, actionCartPutDelete, actionFilterData, actionPutFilterData, actionCartPutClear, actionCartClear};


