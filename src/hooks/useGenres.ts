import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres')

// here we switch from calling the endpoint to fetch genres and 
// instead use the static data saved in the data folder

const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres;