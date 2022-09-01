import { configureStore } from "@reduxjs/toolkit"
import { todosReducer as todos } from "@store/slices/toDosSlice"

const store = configureStore({
    reducer : {
        todos
    },
})

export type RootState = ReturnType<typeof store.getState> 

export default store