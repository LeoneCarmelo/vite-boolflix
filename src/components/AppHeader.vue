<script>
import { store } from '../store'
export default {
    name: 'AppHeader',
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
    <header class="p-3 d-flex justify-content-between align-items-center flex-wrap">
        <a href="" class="text-uppercase fw-bold mx-1 fs-1 text-decoration-none">Netflix</a>
        <a href="#tv-shows" class="text-white text-decoration-none" @click="store.searching = false">Tv Show</a>
        <a href="#movies" class="text-white text-decoration-none" @click="store.searching = false">Movies</a>
        <a href="" class="text-white text-decoration-none" @click="store.searching = false">Recently Added</a>
        <a href="" class="text-white text-decoration-none">My List</a>
        <div class="action">
            <input v-model="store.searchText" @keyup.enter="$emit('filter')">
            <button @click="$emit('filter')" class="mx-2">Search</button>
        </div>
    </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
    background-color: $dark;
    color: $redlogo;
    position: sticky;
    z-index: 1;
    top:0;
    
    a:first-child {
        color:$redlogo;
    }

    button {
        color: $light;
        background-color: transparent;
        border-radius: 5px;
        border-color: $redlogo;

    }
}

header:hover {
    background-color: black;
}


</style>