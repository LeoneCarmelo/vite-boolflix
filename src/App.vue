<script>
import { store } from './store'
import axios from 'axios'
import "/node_modules/flag-icons/css/flag-icons.min.css"
import AppHeader from './components/AppHeader.vue'

export default {
   components: {
      AppHeader
   },
   data() {
      return {
         store
      }
   },
   methods: {
      callApi(url) {
         axios
            .get(url)
            .then(response => {
               console.log(response.data.results)
               store.movies = response.data.results
            })
            .catch(err => {
               console.log(err);
               console.log(err.message);

            })
      },
      filterMovies() {
         if (store.searchText.length > 0) {
            this.callApi(store.API_URL + store.searchText)
         }
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
      getImage(movie) {
         return store.posterPath + movie
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


   },
   mounted() {
      this.callApi(store.API_URL)
   }
}
</script>

<template>
   <AppHeader :filter="filterMovies()" :filterBtn="filterMovies()"/>

   <!-- Main -->
   <main>
      <ul v-if="store.movies">
         <li v-for="movie in store.movies">
            <div class="front_image">
               <img :src="getImage(movie.poster_path)" alt="">
            </div>
            <h3>{{ getTitle(movie) }}</h3><!-- movie.title -->
            <p>{{ getOriginalTitle(movie) }}</p>
            <span :class="getFlag(movie.original_language)"></span>
            <p>{{ getVote(movie.vote_average) }}</p><!-- movie.vote_average -->
            <div class="stars">
               <img v-for="goldStar in getVote(movie.vote_average)" src="/gold-star.png" alt="" class="img-fluid">
               <img v-for="whiteStar in getEmptyStar(movie.vote_average)" src="/white-star.png" alt="" class="img-fluid">
            </div>
         </li>
      </ul>
   </main>
</template>

<style scoped>
.stars > img{
   width:30px;
}
</style>
