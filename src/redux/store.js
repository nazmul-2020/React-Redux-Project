// import { createStore } from "redux";
// import productReducer from "./reducers/productReducer";

// import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import productReducer from "./reducers/productReducer";

// const store = createStore(productReducer);

// export default store;


const store = createStore(productReducer,composeWithDevTools());

export default store