<template>

  <main class="bg-img bg-hend w-100 vh-100 d-flex justify-content-center flex-column ">
  <h1 class="slide-top fs-6h text-center"> <strong> {{ data.title}}</strong></h1>
  <p class="fade-opacity  w-50 mx-auto text-center my-4 fs-3h">{{ data.descriptionHome}}</p>
  </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      data: this.$store.state.vfr.data
    }
  }
})

</script>

<style>
.bg-hend {
  
  background-image: url("@/static/hend.jpg") ;
}
</style>
