<script>
import { store } from './store'
import axios from 'axios'
import "/node_modules/flag-icons/css/flag-icons.min.css"
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
   components: {
      AppHeader,
      AppMain
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
      hasTheImage() {
         if (store.movies) {
            store.movies.forEach((movie, index) => {
               if (!movie[index].hasOwnProperty(movie.poster_path)) {
                   return store.movies.splice(index, 1)
               } else {
                   return store.movies
               }
            });
         }
        },
   },
   mounted() {
      this.callApi(store.API_URL)
      this.hasTheImage()
      console.log(this.hasTheImage())
   }
}
</script>

<template>
   <AppHeader @filter="filterMovies()" />
   <AppMain />
</template>

<style lang="scss" scoped>

</style>
