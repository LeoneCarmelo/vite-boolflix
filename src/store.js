import { reactive } from 'vue'

const store = reactive({
    searchText: '',
    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=ffce8ca545654f470f90e4967c10b588&language=en-US&query=',
    movies: null
})

export { store }