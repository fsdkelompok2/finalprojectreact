import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser, resetState } from '../features/userSlice';
import Cookies from 'js-cookie';

const tagTypes = {
    user: 'User'
}

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER_BASE_URL}/users` }),
  tagTypes: [tagTypes.user],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: '/login',
          method: 'POST',
          credentials: 'include',
          body,
        }
      },
      invalidatesTags: [tagTypes.user]
    }),
    requestVerificationCode: builder.mutation({
      query: (body)=> ({
        url: "/sendVerificationCode",
        method: "POST",
        body
      })
    }),
    register: builder.mutation({
      query: (body) => {
        return {
          url: '/register',
          method: 'POST',
          body,
          credentials: 'include'
        }
      },
      invalidatesTags: [tagTypes.user]
    }),
    logout: builder.query({
      query: () => '/logout',
    }),
    userDetails: builder.query({
      query: () => {
        return {
          url: '/',
          headers: {
            authorization: Cookies.get("session")
          }
        }
      },
      providesTags: [tagTypes.user],
      transformResponse: (res) => {
        const { data } = res;
        return {
          id: data?.customer_id,
          email: data?.email,
          firstName: data?.first_name,
          lastName: data?.last_name,
          shoppingPreference: data?.shopping_preference,
          birth: data?.birth,
          cartId: data?.cart[0]?.cart_id || '',
        }
      },
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.log(error);
        }
      }
    })
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRequestVerificationCodeMutation,
  useLazyLogoutQuery,
  useLazyUserDetailsQuery
} = authAPI;