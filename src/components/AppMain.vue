<script>
import { store } from '../store'
import "/node_modules/flag-icons/css/flag-icons.min.css"
import AppCard from './AppCard.vue'
import HomeVideo from './HomeVideo.vue'
import HomeMovies from './HomeMovies.vue'
import HomeTvshow from './HomeTvshow.vue'
export default {
    name: 'AppMain',
    components: {
        AppCard,
        HomeVideo,
        HomeMovies,
        HomeTvshow
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImage(movie) {
            if (movie) {
                return store.posterPath + movie
            } else {
                return store.imgNotFound
            }
        },
        getTitle(movie) {
            if (movie.title === undefined) {
                return movie.name
            } else {
                return movie.title
            }
        },
        getOriginalTitle(movie) {
            if (movie.original_title === undefined) {
                return movie.original_name
            } else {
                return movie.original_title
            }
        },
        getVote(vote) {
            const newVote = Math.ceil(vote / 2)
            return newVote ? newVote : 0
        },
        getFlagFrom(lang) {
            if (lang === 'en') {
                lang = 'gb'
            } else if (lang === 'ja') {
                lang = 'jp'
            } else if (lang === 'ar') {
                lang = 'sa'
            } else if (lang === 'ko') {
                lang = 'kr'
            }
            return `fi fi-${lang}`
        },
    }
}
</script>

<template>
    <!-- Main -->
    <div :class="store.searching ? 'd-none' : 'd-block'">
        <HomeVideo />
        <HomeMovies />
        <HomeTvshow />
    </div>
    <main :class="store.paddingMain ? 'pt-5' : ''">
        <div class="container">
            <ul v-if="store.movies" class="row">
                <AppCard v-for="movie in store.movies" :src="getImage(movie.poster_path)" :title="getTitle(movie)"
                    :originalTitle="getOriginalTitle(movie)" :flag="getFlagFrom(movie.original_language)"
                    :vote="getVote(movie.vote_average)" :overview="movie.overview" />
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    background-image: url('/bg-netflix.jpg');
    background-repeat: repeat-y;
    background-size: cover;
}

ul {
    color: $light;
    list-style: none;
}
</style>