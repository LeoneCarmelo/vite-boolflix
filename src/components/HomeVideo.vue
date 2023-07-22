<script>
import { store } from '../store'
import axios from 'axios'
export default {
    name: 'HomeVideo',
    data() {
        return {
            store,
            video: '',
            youtube: 'https://www.youtube.com/embed/',
            auto_loop: '?playlist=KlyknsTJk0w&autoplay=1&loop=1&mute=1'
        }
    },
    methods: {
        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results)
                    this.video = response.data.results[0].key
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.message);
                })
        },
    },
    mounted() {
        this.callApi(store.api_video)
    }

}
</script>

<template>
    <div v-if="video" class="custom_height text-center">
        <iframe :src="youtube + video + auto_loop" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="h-100"></iframe>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

iframe {
    width:100%;
}

.custom_height {
    height:calc(100vh - 85px);
}
</style>