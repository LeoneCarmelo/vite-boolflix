<script>
import { store } from './store'
import axios from 'axios'
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
            })
            .catch(err => {
               console.log(err);
               console.log(err.message);
               store.movies = response.data.results
            })
      },
      filterMovies() {
         if (store.searchText.length > 0) {
            this.callApi(store.API_URL + store.searchText)
         }
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
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.original_title }}</p>
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>
         </li>
      </ul>
   </main>
</template>

<style scoped></style>
