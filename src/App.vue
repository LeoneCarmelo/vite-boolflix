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
        })
    }
  },
  mounted() {
    this.callApi(store.API_URL)
  }
}
</script>

<template></template>

<style scoped></style>
