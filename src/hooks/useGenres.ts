import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from './useData';
import apiClient from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres')

// here we switch from calling the endpoint to fetch genres and 
// instead use the static data saved in the data folder

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient
    .get<FetchResponse<Genre>>('/genres')
    .then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, // 24h,
  initialData: { count: genres.length, results: genres }
})

// const fetchGenres = () => {
//   return useQuery<Genre[], Error>({
//     queryKey: ['genres'],
//     queryFn: () => useData<Genre>('/genres')
//     // staleTime: 10 * 1000,
//   })
// }

export default useGenres;