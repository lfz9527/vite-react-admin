import {
  combineReducers,
  legacy_createStore as createStore,
  // compose,
} from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
// import { applyMiddleware } from "redux"
// import reduxThunk from "redux-thunk"
// import reduxPromise from "redux-promise"
import menu from "./modules/menu/reducer"

// 创建reducer(拆分reducer)
const reducer = combineReducers({ menu })

// redux 持久化配置
const persistConfig = {
  key: "redux-state",
  storage: storage,
}

const persistReducerConfig = persistReducer(persistConfig, reducer)

// 开启 redux-devtools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 使用 redux 中间件
// const middleWares = applyMiddleware(reduxThunk, reduxPromise)

//  composeEnhancers(middleWares)
// 创建 store
const store = createStore(persistReducerConfig)

// 创建持久化 store
const persistor = persistStore(store)

export { persistor, store }
