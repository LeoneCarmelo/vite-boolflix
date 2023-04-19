import { reactive } from 'vue'

const store = reactive({
    searchText: '',
    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=ffce8ca545654f470f90e4967c10b588&language=en-US&query=',
    API_URL_TV_S: 'https://api.themoviedb.org/3/search/tv?api_key=ffce8ca545654f470f90e4967c10b588&query=',
    movies: null,
    tv_shows: null,

})

export { store }