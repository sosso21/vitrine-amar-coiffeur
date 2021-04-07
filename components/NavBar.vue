<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
  
 
 <NuxtLink to="/" class="navbar-brand" >
  <h1 class="nav-title">
  {{data.title}}
  </h1>
  </NuxtLink>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      <li v-for="i in  data.navLink" class="nav-item">
          <NuxtLink :to="i.href" class="nav-link"><i :class="i.svg"></i> {{i.name}}</NuxtLink>
      </li> 
      
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
</div>
  
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
<style >
    .nav-title{
    font-size: inherit;
    line-height: inherit;
    white-space: inherit;
        margin-bottom:inherit;
    font-weight: inherit;
    }

</style>