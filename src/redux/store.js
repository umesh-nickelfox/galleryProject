import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
//import AppReducer from "../reducers/appReducer";
//import { persistStore, persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// const PersistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["app"],
// };

//const persistedReducer = persistReducer(PersistConfig, rootReducer);

const store = createStore(rootReducer, composeWithDevTools());


// const store = createStore(persistedReducer);
// export const persistor = persistStore(store);
export default store;
