<template>
    <main class="bg-social bg-img vh-100 w-100 d-flex flex-column justify-content-around ">
        <h2 class="fade-opacity text-center w-100 fs-6h font-weight-light">{{data.social.title }}</h2>
        <ul class=" d-flex justify-content-around  align-content-around flex-wrap">
        <li v-for="i in data.social.media" class="slide-left list-unstyled"> <a :href="i.link" class="text-center text-decoration-none d-flex flex-column text-light" target="_blank"><i  :class="i.svg+ ' fs-8h scalit'"></i><h3>{{i.title}} </h3></a> </li>
        </ul>
    </main>
</template>
<script>

export default {
  data() {
    return {
      data: this.$store.state.vfr.data
    }
  }
    
}
</script>
<style  >

.scalit { transition: all .2s ease-in-out; }
.scalit:hover { transform: scale(1.1); }
.bg-social {
    background-image: url("@/static/social.jpg")
}
    
</style>