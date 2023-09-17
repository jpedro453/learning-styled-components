import { createSlice } from "@reduxjs/toolkit";
import IList from "../../interfaces/IList";

interface ListsSliceState {
    lists: IList[];
}

const initialState: ListsSliceState = {
    lists: [
        {
            id: 1,
            title: "Lista 1",
            completed: false,
        },
        {
            id: 2,
            title: "Lista 2",
            completed: false,
        },
        {
            id: 3,
            title: "Lista 3",
            completed: true,
        },
    ],
};
export const listsSlice = createSlice({
    name: "lists",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        add: (state, action) => {
            const list = action.payload;
            state.lists = [...state.lists, list];
        },
        remove: (state, action) => {
            const updatedList = state.lists.filter(
                (list) => list.id !== action.payload.id
            );
            state.lists = updatedList;
        },
        complete: (state, action) => {
            const itemToUpdate = action.payload.id;
            state.lists = state.lists.map((list) => {
                if (list.id === itemToUpdate) {
                    return {
                        ...list,
                        completed: true,
                    };
                }
                return list;
            });
        },
        edit: (state, action) => {
            const itemToUpdate = action.payload.id;
            state.lists = state.lists.map((list) => {
                if (list.id === itemToUpdate) {
                    return {
                        ...list,
                        completed: false,
                    };
                }
                return list;
            });
        },
    },
});
export const { add, remove, complete, edit } = listsSlice.actions;
export default listsSlice.reducer;
