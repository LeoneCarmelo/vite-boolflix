<script>
import { store } from '../store'
export default {
    name: 'AppCard',
    data() {
        return {
            store
        }
    },
    props: {
        src: String,
        title: String,
        originalTitle: String,
        flag: String,
        vote: Number,
        goldStar: Number,
        emptyStar: Number
    }
}
</script>

<template>
    <li class="col">
        <div class="front_card">
            <img :src="src" alt=""><!-- getImage(movie.poster_path) -->
        </div>
        <div class="back_card">
            <h3>{{ title }}</h3><!-- movie.title -->
            <p>{{ originalTitle }}</p><!-- getOriginalTitle(movie) -->
            <span :class="flag"></span><!-- getFlag(movie.original_language) -->
            <p>{{ vote }}</p><!-- getVote(movie.vote_average) -->
            <div class="stars">
                <img v-for="star in goldStar" src="/gold-star.png" alt="" class="img-fluid"><!-- getVote(movie.vote_average) -->
                <img v-for="whiteStar in emptyStar" src="/white-star.png" alt="" class="img-fluid"><!-- getEmptyStar(movie.vote_average) -->
            </div>
        </div>
    </li>
</template>


<style lang="scss" scoped>
.stars > img {
    width: 30px;
}
</style>