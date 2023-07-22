import { reactive } from 'vue'

const store = reactive({
    searchText: '',
    API_URL: 'https://api.themoviedb.org/3/search/multi?api_key=ffce8ca545654f470f90e4967c10b588&query=',
    api_video:'https://api.themoviedb.org/3/movie/157336/videos?api_key=ffce8ca545654f470f90e4967c10b588',
    api_popular: 'https://api.themoviedb.org/3/movie/popular?api_key=ffce8ca545654f470f90e4967c10b588&',
    api_tv_show:'https://api.themoviedb.org/3/discover/tv?api_key=ffce8ca545654f470f90e4967c10b588&',
    movies: null,
    tv_shows: null,
    posterPath: 'https://image.tmdb.org/t/p/w342',
    imgNotFound: '/image-not-found.jpg',
    paddingMain: false,
    searching:false
})

export { store }