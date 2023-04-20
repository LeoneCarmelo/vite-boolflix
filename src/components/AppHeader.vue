<script>
import { store } from '../store'
export default {
    name: 'AppHeader',
    props: {
        filter: Function,
        filterBtn: Function
    },
    emits: ['filter'],
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
      <input v-model="store.searchText" @keyup.enter="$emit('filter')"><!-- filterMovies() -->
      <button @click="$emit('filter')" class="mx-2">Search</button>
   </header>
</template>


<style lang="scss" scoped></style>