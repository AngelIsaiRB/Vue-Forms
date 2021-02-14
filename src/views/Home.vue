<template>
  <form @submit.prevent="procesarFormulario">
    <InputVue :tarea="tarea" />
  </form>
  <hr>
  <ListasTareasVue/>
</template>

<script>
import InputVue from '../components/Input.vue'
import {mapActions} from "vuex"
import ListasTareasVue from '../components/ListasTareas.vue';
const shortid = require("shortid");
export default {
  name: 'Home',
  components: {
    InputVue,
    ListasTareasVue
  },
  data() {
    return {
      tarea: {
        id:"",
        nombre:"",
        categorias: [],
        estado:"",
        numero:0
      }
    }
  },
  methods: {
    ...mapActions(["setTareas","cargarLocalStorage"]),
    procesarFormulario() {
        console.log(this.tarea)
        if(this.tarea.nombre.trim === ""){
          return
        }
        // generar id
        this.tarea.id = shortid.generate();
        
        // 
        this.setTareas(this.tarea);

        this.tarea={
        id:"",
        nombre:"",
        categorias: [],
        estado:"",
        numero:0
      }
    }
  } 
  
}
</script>
