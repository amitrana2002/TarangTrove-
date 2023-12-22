
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '0c3dac66e5msh500e9be12dfbf79p1f0edcjsnc64b9a9b7da8',
//     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//   }
// };

// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const shazamApi=createApi({
  reducePath:'shazamApi',
  baseQuery :fetchBaseQuery({
    baseUrl:'https://shazam.p.rapidapi.com/',
    prepareHeaders:(headers)=>{
      headers.set('X-RapidAPI-Key','0c3dac66e5msh500e9be12dfbf79p1f0edcjsnc64b9a9b7da8');
      return headers;
    },
  }),
  endpoints:(builder)=>({
    getTopCharts:builder.query({query:()=>'/charts/track'})
  })
});

export const {
  useGetTopChartsQuery,
}=shazamApi;

