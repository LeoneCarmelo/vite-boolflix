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
        <h1 class="text-uppercase fw-bold mx-1">Boolflix</h1>
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