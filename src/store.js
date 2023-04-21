import { reactive } from 'vue'

const store = reactive({
    searchText: '',
    API_URL: 'https://api.themoviedb.org/3/search/multi?api_key=ffce8ca545654f470f90e4967c10b588&query=',
    movies: null,
    tv_shows: null,
    posterPath: 'https://image.tmdb.org/t/p/w342',
    imgNotFound: '/image-not-found.jpg',
    paddingMain: false

})

export { store }