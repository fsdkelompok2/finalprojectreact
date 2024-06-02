import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import transformCartResponse from './utils/transformCartResponse';
import { setCartItem } from '../features/cartSlice';

const tagTypes = {
    cart: 'Cart'
}

export const cartAPI = createApi({
  reducerPath: 'cartAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/cart` }),
  tagTypes: [tagTypes.cart],
  endpoints: (builder) => ({
    cart: builder.query({
        query: (userId) => {          
          return {
            url: `/${userId}`,
            headers: {
              authorization: Cookies.get("session")
            },
            credentials: 'include',
          }
        },
        transformResponse: (res) => {
          const { data } = res;
          const cartData = data[0];
          return transformCartResponse(cartData.cart_item);
        },
        onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
          try {
            const { data } = await queryFulfilled;
            dispatch(setCartItem(data.cartItems));
          } catch (error) {
            console.log(error);
          }
        },
        providesTags: [tagTypes.cart]  
    }),
    addItem: builder.mutation({
      query: (body) => {
        return {
          url: '/',
          method: 'POST',
          headers: {
            authorization: Cookies.get("session")
          },
          credentials: 'include',
          body
        }
      },
      transformResponse: (res) => {
        const { data } = res;
        const cartData = data[0];
        return transformCartResponse(cartData.cart_item);
      },
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCartItem(data.cartItems));
        } catch (error) {
          console.log(error);
        }
      }, 
      invalidatesTags: [tagTypes.cart]
    }),
    deleteItem: builder.mutation({
      query: ({cartId, cartItemId}) => {
        return {
          url: `/${cartId}`,
          method: 'DELETE',
          headers: {
            authorization: Cookies.get("session")
          },
          credentials: 'include',
          body: {
            cart_item_id: cartItemId
          }
        }
      },
      transformResponse: (res) => {
        const { data } = res;
        const cartData = data[0];

        return transformCartResponse(cartData.cart_item);
      },
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCartItem(data.cartItems));
        } catch (error) {
          console.log(error);
        }
      },
      invalidatesTags: [tagTypes.cart]
    }),
    increaseItemQuantity: builder.mutation({
      query: ({cartId, cartItemId}) => {
        return {
          url: `/${cartId}`,
          method: 'PUT',
          headers: {
            authorization: Cookies.get("session")
          },
          credentials: 'include',
          body: {
            cart_item_id: cartItemId,
            action: 'increase'
          }
        }
      },
      transformResponse: (res) => {
        const { data } = res;

        return transformCartResponse(data.cart_item);
      },
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCartItem(data.cartItems));
        } catch (error) {
          console.log(error);
        }
      },
     providesTags: [tagTypes.cart] 
    }),
    decreaseItemQuantity: builder.mutation({
      query: ({cartId, cartItemId}) => {
        return {
          url: `/${cartId}`,
          method: 'PUT',
          headers: {
            authorization: Cookies.get("session")
          },
          credentials: 'include',
          body: {
            cart_item_id: cartItemId,
            action: 'decrease'
          }
        }
      },
      transformResponse: (res) => {
        const { data } = res;

        return transformCartResponse(data.cart_item);
      },
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCartItem(data.cartItems));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: [tagTypes.cart] 
    }),
  }),
});

export const {
    useCartQuery,
    useAddItemMutation,
    useDeleteItemMutation,
    useIncreaseItemQuantityMutation,
    useDecreaseItemQuantityMutation
} = cartAPI;