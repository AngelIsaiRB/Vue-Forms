<template>
    <NavbarVue/>
    <div class="container">
      <router-view/>
    </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue'

export default {
  components:{
    NavbarVue
  }  
}
</script>