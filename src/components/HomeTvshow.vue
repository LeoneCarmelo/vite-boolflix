<script>
import { store } from '../store'
import axios from 'axios'
    export default {
        name: 'HomeTvshow',
        data() {
            return {
                store,
                tv_shows: []
            }
        },
    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results)
                    this.tv_shows = response.data.results
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.message);
                })
        },
        
    },
    mounted() {
            this.callApi(store.api_tv_show)
    }
    }
</script>

<template>
    <div id="tv-shows" class="movies p-4 vh-100 my-3">
        <h1  class="text-light">Tv Shows</h1>
        <div class="container">
            <div class="row flex-nowrap my-3" v-if="tv_shows">
                <div class="col" v-for="tv_show in tv_shows">
                    <div class="card">
                        <div class="card-img-top">
                            <img :src="store.posterPath + tv_show.poster_path" alt="" class="rounded-1">
                        </div>
                    </div>
                    <h6 class="text-light">{{ tv_show.original_title }}</h6>
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
    .card {
        border: 1.5px solid white;
        
        img {
            width:250px;
            height:400px;
            object-fit: cover;
        }
    }

}
</style>