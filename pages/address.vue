<template>
    <main class="bg-img bg-chisel py-4 w-100 vh-100 d-flex justify-content-around align-content-start flex-wrap ">
        <h2 class="slide-top text-center font-weight-light w-100 my-4">{{data.address.title}} </h2>
        <section class="fade-opacity  my-4 py-4">
        <h3>{{data.address.address.title}} :</h3>
        <address class="pre-wrap">

<strong> {{data.address.address.street}}</strong> 
        {{data.address.address.town}}
        {{data.address.address.state}}
        {{data.address.address.cp}}
        {{data.address.address.country}}

</address>
        </section>
        <section>
        <iframe :src="data.address.iframe"  class="map-iframe" allowfullscreen="" loading="lazy"></iframe>
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