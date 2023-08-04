import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { filterSlice } from "../App/Slice/filterSlice";
import { todoSlice } from "../App/Slice/todoSlice";
const store = configureStore({
    reducer: {
        filtersReducer: filterSlice.reducer,
        todoReducer: todoSlice.reducer,

    },
    middleware: [thunk],
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store