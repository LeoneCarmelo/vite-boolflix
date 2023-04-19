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
         }
         return `fi fi-${flag}`
      }
   },
   mounted() {
      console.log(this.store)
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
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.original_title }}</p>
            <span :class="getFlag(movie.original_language)"></span>
            <p>{{ movie.vote_average }}</p>
         </li>
      </ul>
   </main>
</template>

<style scoped></style>
