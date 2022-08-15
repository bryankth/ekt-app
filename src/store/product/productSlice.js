import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoadingProducts: true,
        products: [
        ],
        activeProduct: null
    },
    reducers: {
        onSetActiveProduct: ( state, { payload }) => {
            state.activeProduct = payload;
        },
        onAddNewProduct: ( state, { payload }) => {
            state.products.push( payload );
            state.activeProduct = null;
        },
        onUpdateProduct: ( state, { payload } ) => {
            state.products = state.products.map( product => {
                if ( product.id === payload.id ) {
                    return payload;
                }

                return product;
            });
        },
        onDeleteProduct: ( state,  { payload }) => {
            console.log(payload);
                state.products = state.products.filter( product => product.id !== payload._id );
                state.activeProduct = null;
                state.isLoadingProducts = true;
        },
        onLoadProducts: (state, { payload = [] }) => {
            state.isLoadingProducts = true;
             state.products = payload.products;
        },
        onLogoutApp: ( state ) => {
            state.isLoadingProducts = true,
            state.products      = []
            state.activeProduct = null
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onAddNewProduct,
    onDeleteProduct,
    onLoadProducts,
    onLogoutApp,
    onSetActiveProduct,
    onUpdateProduct,
} = productSlice.actions;