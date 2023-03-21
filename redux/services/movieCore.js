import { fetchBaseQuery,createApi } from '@reduxjs/toolkit/query/react'


export const movieCoreApi = createApi({
    reducerPath: 'movieCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    })
})