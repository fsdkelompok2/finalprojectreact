import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser, resetState } from '../features/userSlice';
import Cookies from "js-cookie";

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
          body,
          credentials: 'include'
        }
      }
    }),
    verifyIdentityToken: builder.query({
      query: () => {
        return ({
          url: "/",
          headers: {
            authorization: Cookies.get("session")
          }
        })
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
            const { data } = await queryFulfilled;

            // Set userSlice data
            dispatch(setUser({...data.data}));
          } catch (error) {
            console.log(error);
            
            // Set userSlice data
            dispatch(resetState());
        }
      },
      providesTags: [tagTypes.user]
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
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
            const { data } = await queryFulfilled;
            console.log("Data from user sign up", data);
            
            dispatch(setUser(data));
            dispatch(setIsAuthenticated(true));
            dispatch(setIsLoading(false));
        } catch (error) {
            console.log(error);

            dispatch(setUser(null));
            dispatch(setIsAuthenticated(true));
            dispatch(setIsLoading(false));
        }
      },
      invalidatesTags: [tagTypes.user]
    }),
    logout: builder.query({
      query: () => '/logout',
    })
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRequestVerificationCodeMutation,
  useLazyLogoutQuery,
  useVerifyIdentityTokenQuery,
  useLazyVerifyIdentityTokenQuery
} = authAPI;