import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

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
            credentials: true,
          }
        },
        providesTags: [tagTypes.cart]  
    }),
  }),
});

export const {
    useCartQuery,
} = cartAPI;