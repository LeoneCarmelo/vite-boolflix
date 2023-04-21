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
        emptyStar: Number,
        overview: String
    }
}
</script>

<template>
    <li class="col mb-4">
        <div class="front_card">
            <img :src="src" alt=""><!-- getImage(movie.poster_path) -->
            <div class="back_card p-2">
                <h4 class="fw-bold">Titolo: {{ title }}</h4><!-- movie.title -->
                <p><strong>Titolo originale:</strong> {{ originalTitle }}</p><!-- getOriginalTitle(movie) -->
                <p><strong>Language: </strong><span :class="flag"></span></p><!-- getFlag(movie.original_language) -->     
                <!-- <p>{{ vote }}</p> --><!-- getVote(movie.vote_average) -->
                <div class="stars">
                    <strong>Voto: </strong> 
                    <img v-for="star in goldStar" src="/gold-star.png" alt="" class="img-fluid"><!-- getVote(movie.vote_average) -->
                    <img v-for="whiteStar in emptyStar" src="/white-star.png" alt="" class="img-fluid"><!-- getEmptyStar(movie.vote_average) -->
                </div>
                <p><strong>Overview: </strong>{{ overview }}</p>
            </div>

        </div>
    </li>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.front_card {
    position:relative;

    .back_card {
        position:absolute;
        top:0;
        left: 0;
        width:100%;
        height:100%;
        background-color: rgba(0, 0, 0, 0.644);
        display: none;
        border:2px solid $light;
    }

    
    .stars > img {
        width: 30px;
    }
}

.front_card:hover  .back_card{
    display: block;
}

</style>