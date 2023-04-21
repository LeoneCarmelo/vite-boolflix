<script>
import { store } from '../store'
import "/node_modules/flag-icons/css/flag-icons.min.css"
import AppCard from './AppCard.vue'
export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImage(movie) {
            return store.posterPath + movie
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
            return newVote
        },
        getEmptyStar(vote) {
            const newVote = this.getVote(vote)
            const star = 5 - newVote
            if (newVote === undefined) {
                return ''
            }
            return star
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
    <main class="mt-5">
        <div class="container">
            <ul v-if="store.movies" class="row">
                <AppCard v-for="movie in store.movies" :src="getImage(movie.poster_path)" :title="getTitle(movie)"
                    :originalTitle="getOriginalTitle(movie)" :flag="getFlagFrom(movie.original_language)"
                    :vote="getVote(movie.vote_average)" :goldStar="getVote(movie.vote_average)"
                    :emptyStar="getEmptyStar(movie.vote_average)" :overview="movie.overview" />
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

ul {
    color: $light;
    list-style: none;
}
</style>