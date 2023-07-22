<script>
import { store } from '../store'
import axios from 'axios'
export default {
    name: 'HomeMovies',
    data() {
        return {
            store,
            popular_movies:[]
        }
    },
    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results)
                    this.popular_movies = response.data.results
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.message);
                })
        },
    },
    mounted() {
            this.callApi(store.api_popular)
    }
}
</script>

<template>
    <div id="movies" class="movies p-4 vh-100 my-3">
        <h1  class="text-light">Movies</h1>
        <div class="container">
            <div class="row flex-nowrap my-3" v-if="popular_movies">
                <div class="col" v-for="popular_movie in popular_movies">
                    <div class="card">
                        <div class="card-img-top">
                            <img :src="store.posterPath + popular_movie.poster_path" alt="">
                        </div>
                    </div>
                    <h6 class="text-light">{{ popular_movie.original_title }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.row{
    height:450px;
    width:100%;
    overflow-x: scroll;
    //overscroll-behavior: contain;

    img {
        width:250px;
        height:400px;
        object-fit: cover;
    }
}
</style>