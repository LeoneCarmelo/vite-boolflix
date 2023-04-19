<script>
import { store } from './store'
import axios from 'axios'
import "/node_modules/flag-icons/css/flag-icons.min.css"

export default {
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
      }
   },
   mounted() {
      this.callApi(store.API_URL)
   }
}
</script>

<template>
   <!-- Header -->
   <header class="p-3">
      <h1>Boolflix</h1>
      <input v-model="store.searchText" @keyup.enter="filterMovies()">
      <button @click="filterMovies()" class="mx-2">Search</button>
   </header>
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
            <p>{{ movie.vote_average }}</p>
         </li>
      </ul>
   </main>
</template>

<style scoped></style>
