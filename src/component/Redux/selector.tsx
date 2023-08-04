import { createSelector } from "@reduxjs/toolkit";
export const todoCateSelector = (state: any) => {
    return state.filtersReducer.listCategory;
};
export const todoProductSelector = (state: any) => {
    return state.filtersReducer.listProduct;
};
export const searchSelector = (state: any) => {
    return state.filtersReducer.filters.search;
}
export const statusSelector = (state: any) => {
    return state.filtersReducer.filters.status;
}
export const productFavoriteSelector = (state: any) => {
    return state.todoReducer.listProdcutFavorite;
}
export const listAddressUser = (state: any) => {
    return state.todoReducer.listAddressUser;
}
export const listCardSelector = (state: any) => {
    return state.todoReducer.listCard;
}
export const User = (state: any) => {
    return state.todoReducer.user;
}
export const todoRemainingSelectFavorite = createSelector(productFavoriteSelector, (productFavorite) => {
    return productFavorite;
});
export const todoRemainingSelectAddressUser = createSelector(listAddressUser, (addressUser) => {
    return addressUser;
});
export const todoRemainingSelectCard = createSelector(listCardSelector, (listCard) => {
    return listCard;
})
export const todoRemainingSelectCate = createSelector(todoCateSelector, searchSelector, (listCategory, search) => {
    return listCategory.filter((todo: any) => {
        return todo.name.toLowerCase().includes(search.toLowerCase());
    })
});
export const todoRemainingSelectProduct = createSelector(todoProductSelector, searchSelector, statusSelector, (listProduct, search, status) => {

    return listProduct.filter((todo: any) => {
        if (status === 'All') {
            return todo.name.includes(search);
        }
        return todo.name.includes(search) && todo.category.includes(status);
    })
});

