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
        <div class="input-wrapper">
            <button class="icon">
                <i class="fa-solid fa-magnifying-glass fa-beat-fade fs-4" style="color: #ff0000;"></i>
            </button>
            <input placeholder="search.." class="input" name="text" type="text" v-model="store.searchText" @keyup.enter="$emit('filter')">
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
    top: 0;

    a:first-child {
        color: $redlogo;

    }

    a.text-white {
        border-bottom: 0;
        padding-bottom: 10px;
        transition: all 0.3s ease-in-out;
    }

    a.text-white:hover {
        border-bottom: 5px solid $light;
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

.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
  background: transparent;
}

.input {
  border-style: none;
  height: 50px;
  width: 50px;
  padding: 10px;
  outline: none;
  border-radius: 50%;
  transition: .5s ease-in-out;
  //box-shadow: 0px 0px 3px #f3f3f3;
  padding-right: 40px;
  color: #fff;
}

.input::placeholder,
.input {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
}

.input::placeholder {
  color: #8f8f8f;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  outline: none;
  border-style: none;
  border-radius: 50%;
  pointer-events: painted;
  background: transparent;
  transition: .2s linear;
}

.icon:focus ~ .input,
.input:focus {
  box-shadow: none;
  width: 250px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 3px solid $redlogo;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
</style>