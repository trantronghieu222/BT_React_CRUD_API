import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
    arrStore: [
        {
            id: 1,
            name: "Khải Sneaker",
            alias: "khai-sneaker",
            latitude: "10.771663",
            longtitude: "106.669631",
            description: "379 sư vạn hạnh quận 10",
            image: "https://apistore.cybersoft.edu.vn/images/https://localhost:44366/images/store1.jpg",
            deleted: false
        },
    ],
};

const ProductReducer = createSlice({
    name: 'storeReducer',
    initialState,
    reducers: {
        getProductApi: (state, action) => {
            state.arrStore = action.payload;
        },
        addStore: (state, action) => {
            const findStore = state.arrStore.find(p => p.id == action.payload.id);
            if (findStore) {
                alert('Id tồn tại')
            }
            else {
                state.arrStore.push(action.payload);
            }
        },
        delStore: (state, action) => {
            const index = state.arrStore.findIndex(store => store.id === action.payload.id);
            if (index !== -1) {
                state.arrStore.splice(index, 1);
            }
        },
        updateStore: (state, action) => {
            const index = state.arrStore.findIndex(store => store.id === action.payload.id);
            if (index !== -1) {
                state.arrStore[index] = action.payload;
            }
        },
    },
});

export const { getProductApi, addStore, delStore, updateStore } = ProductReducer.actions

export default ProductReducer.reducer

// --------------------- Action thunk ------------------------
export const getAllStoreApi = () => {
    return async (dispatch, getState) => {
        try {
            const result = await axios({
                url: 'https://apistore.cybersoft.edu.vn/api/Store/getAll',
                method: 'GET'
            });
            const action = getProductApi(result.data.content);
            dispatch(action);
        }
        catch {
            console.log(error);
        }
    }
}