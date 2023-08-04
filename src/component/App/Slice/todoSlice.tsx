import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useContext } from "react";
import { UserContext } from "../../Login/API/LoginProvider";
interface List {
    listProdcutFavorite: Array<{key:number,img: any, category: string, name: string,quantity: number, price: number}>,
    listAddressUser:Array<any>,
    listCard:Array<{key:number,img: any, category: string, name: string,quantity: number, price: number}>
    user:Object
}
export const fetchInitialUser: any = createAsyncThunk('todo/fetchInitialUser', async (user) => {
    return user;
})
const initialState: List = {
    listProdcutFavorite: [],
    listAddressUser: [
        {
            id: '1',
            icon: require('../../../assets/images/iconOffice.png'),
            addressTitle: "Home",
            city: 'HN',
            address: 'Lungangen 6, 41722',
            name: 'Le Trung Hau 1'
        },
        {
            id: '2',
            icon: require('../../../assets/images/iconOffice.png'),
            addressTitle: "School",
            city: 'DN',
            address: 'Lungangen 6, 41722',
            name: 'Le Trung Hau 2'
        },
        {
            id: '3',
            icon: require('../../../assets/images/iconOffice.png'),
            addressTitle: "Office",
            city: 'HCM',
            address: 'Lungangen 6, 41722',
            name: 'Le Trung Hau 3'
        },
        {
            id: '4',
            icon: require('../../../assets/images/iconOffice.png'),
            addressTitle: "The Coffee",
            city: 'HN',
            address: 'Lungangen 6, 41722',
            name: 'Le Trung Hau 4'

        },
    ],
    listCard: [
    ],
    user:[]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDoFavorite: (state, action) => {
            state.listProdcutFavorite.push(action.payload);
        },
        deleteToDoFavorite: (state, action) => {
            state.listProdcutFavorite.splice(state.listProdcutFavorite.findIndex((item) => item.key === action.payload.key), 1);
        },
        addAddressUser: (state, action) => {
            state.listAddressUser.push(action.payload);
        },
        updateAddressUser: (state, action) => {
            state.listAddressUser.map(user => {
                if (user.id === action.payload.id) {
                    user.address = action.payload.changeAddress;
                    user.addressTitle = action.payload.changeAddressTitle;
                    user.city = action.payload.changeCity;
                    user.name = action.payload.changeName;
                }
            });
        },
        addToDoCard: (state, action) => {
            state.listCard.push(action.payload)
        },
        updateQuanlityCard: (state, action) => {
            state.listCard.map(todo => {
                if (todo.key === action.payload.key) {
                    todo.quantity = action.payload.quantity;
                }
            })
        },
        deleteTodoCard: (state, action) => {
            state.listCard.splice(state.listCard.findIndex((item) => item.key === action.payload.key), 1);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitialUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            
    },

})