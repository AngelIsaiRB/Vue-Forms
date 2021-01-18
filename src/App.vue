<template>
    <NavbarVue/>
    <div class="container">
      <router-view/>
    </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue'
import {mapActions} from "vuex"
export default {
  components:{
    NavbarVue
  },
  methods:{
    ...mapActions(["cargarLocalStorage"])
  },
  created(){
    this.cargarLocalStorage();
  }  
}
</script>