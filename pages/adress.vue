<template>
    <main class="bg-img bg-chisel py-4 w-100 vh-100 d-flex justify-content-around align-content-start flex-wrap ">
        <h2 class="slide-top text-center font-weight-light w-100 my-4">{{data.adress.title}} </h2>
        <section class="fade-opacity  my-4 py-4">
        <h3>{{data.adress.adress.title}} :</h3>
        <address class="pre-wrap">
        {{data.adress.adress.street}}
        {{data.adress.adress.town}}
        {{data.adress.adress.state}}
        {{data.adress.adress.cp}}
        {{data.adress.adress.contry}}

</address>
        </section>
        <section>
        <iframe :src="data.adress.iframe"  class="map-iframe" allowfullscreen="" loading="lazy"></iframe>
        </section>
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
    .bg-chisel{
  background-image: url("@/static/chisel.jpg") ;
    }
    .map-iframe{
    widows: 100%;
    height: 100%;
    border: none;
    }

</style>