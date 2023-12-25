
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
    getTopCharts:builder.query({query:()=>'/charts/track'}),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/v2/get-details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/shazam-songs/list-similarities?track_id=${songid}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
  })
});

export const {
  useGetTopChartsQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetSongsBySearchQuery,
  useGetSongsByCountryQuery,
}=shazamApi;

