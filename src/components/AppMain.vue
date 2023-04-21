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
            const newVote = Math.ceil(vote)
            switch (newVote) {
                case 10:
                case 9:
                    return 5
                    break;
                case 8:
                case 7:
                    return 4
                    break;
                case 6:
                case 5:
                    return 3
                    break;
                case 4:
                case 3:
                    return 2
                    break;
                case 2:
                case 1:
                    return 1
            }

        },
        getEmptyStar(vote) {
            const newVote = this.getVote(vote)
            const star = 5 - newVote
            if (newVote === undefined) {
                return ''
            }
            return star
        },
        getFlag(flag) {
            if (flag === 'en') {
                flag = 'gb'
            } else if (flag === 'ja') {
                flag = 'jp'
            } else if (flag === 'ar') {
                flag = 'sa'
            } else if (flag === 'ko') {
                flag = 'kr'
            }
            return `fi fi-${flag}`
        },
    }
}
</script>

<template>
    <!-- Main -->
    <main>
        <div class="container">
            <ul v-if="store.movies" class="row">
                <AppCard v-for="movie in store.movies" :src="getImage(movie.poster_path)" :title="getTitle(movie)" :originalTitle="getOriginalTitle(movie)" :flag="getFlag(movie.original_language)" :vote="getVote(movie.vote_average)" :goldStar="getVote(movie.vote_average)" :emptyStar="getEmptyStar(movie.vote_average)" :overview="movie.overview"/>
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