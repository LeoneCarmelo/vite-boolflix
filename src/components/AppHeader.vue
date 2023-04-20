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
    <header class="p-3 d-flex justify-content-between align-items-center">
        <h1 class="text-uppercase fw-bold">Boolflix</h1>
        <div class="action">
            <input v-model="store.searchText" @keyup.enter="$emit('filter')"><!-- filterMovies() -->
            <button @click="$emit('filter')" class="mx-2">Search</button>
        </div>
    </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
    background-color: $dark;
    color: $redlogo;

    button {
        color: $light;
        background-color: transparent;
        border-radius: 5px;
        border-color: $redlogo;

    }
}
</style>