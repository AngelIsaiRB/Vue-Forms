<template>
  <form @submit.prevent="procesarFormulario">
    <InputVue :tarea="tarea" />
  </form>
  <p>{{tarea}}</p>
</template>

<script>
import InputVue from '../components/Input.vue'
export default {
  name: 'Home',
  components: {
    InputVue
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
    procesarFormulario() {
        console.log(this.tarea)
        if(this.tarea.nombre.trim === ""){
          return
        }
        this.tarea={
        nombre:"",
        categorias: [],
        estado:"",
        numero:0
      }
    }
  },
  
}
</script>
