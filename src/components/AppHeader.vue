<script>
import { store } from '../store'
export default {
    name: 'AppHeader',
    props: {
        filter: Function,
        filterBtn: Function
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
   <!-- Header -->
   <header class="p-3">
      <h1>Boolflix</h1>
      <input v-model="store.searchText" @keyup.enter="filter"><!-- filterMovies() -->
      <button @click="filterBtn" class="mx-2">Search</button>
   </header>
</template>


<style lang="scss" scoped></style>