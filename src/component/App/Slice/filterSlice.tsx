import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useContext } from "react";
import { UserContext } from "../../Login/API/LoginProvider";
import { AppContext } from "../API/AppProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { User } from "../../Redux/selector";

export const fetchInitialData: any = createAsyncThunk('filters/fetchInitialData', async () => {
    const { checkToken, refreshToken } = useContext(UserContext);
    const { getAllProduct }: any = useContext(AppContext);
    const [[, access_token], [, token]] = await AsyncStorage.multiGet(['token', 'refreshToken']);
    const user:any = await AsyncStorage.getItem('user');
    const parseUser = JSON.parse(user);
    console.log("AccessStore", access_token);
    const check = await checkToken(access_token);
    if (!check) {
        console.log("user", parseUser);
        const refresh_Token = await refreshToken(parseUser.email, token);
        if (refresh_Token) {
            console.log("refresh");
            const response = await getAllProduct();
            return response.data;
        }
    }
    const response = await getAllProduct();
    return response.data;

})
export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        filters: {
            search: '',
            status: 'All',
            loading: false,
            error: null,
        },
        listCategory: [{
            key: 1,
            img: require('../../../assets/images/imgFR-nho.png'),
            name: 'Fruits',
            color: '#EDD0FF',
        },
        {
            key: 2,
            img: require('../../../assets/images/img-ca.png'),
            name: 'Fish',
            color: '#FBC1BD',
        },
        {
            key: 3,
            img: require('../../../assets/images/img-vegetable.png'),
            name: 'Vegatables',
            color: '#FFD9BA',
        },
        {
            key: 4,
            img: require('../../../assets/images/img-seafood.png'),
            name: 'Sea Food',
            color: '#FFE299',
        },
        {
            key: 6,
            img: require('../../../assets/images/img-icecream.png'),
            name: 'Ice Cream',
            color: '#FFDEF6',
        },
        {
            key: 7,
            img: require('../../../assets/images/img-meat.png'),
            name: 'Meat',
            color: '#FACCCC',
        },
        {
            key: 8,
            img: require('../../../assets/images/img-cake.png'),
            name: 'Cake',
            color: '#FFE0B2',
        },
        {
            key: 9,
            img: require('../../../assets/images/img-drink.png'),
            name: 'Drinks',
            color: '#66EFD1',
        },
        {
            key: 10,
            img: require('../../../assets/images/img-snack.png'),
            name: 'Snacks',
            color: '#FFE0B2',
        }],
        listProduct: [],

    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.filters.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            console.log(action.payload);

            state.filters.status = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitialData.pending, (state) => {
                state.filters.loading = true;
            })
            .addCase(fetchInitialData.fulfilled, (state, action) => {
                state.filters.loading = false;
                state.listProduct = action.payload;
            })
            .addCase(fetchInitialData.rejected, (state, action) => {
                state.filters.loading = false;
                state.listProduct = []
                state.filters.error = action.error.message;
            });
    },

})