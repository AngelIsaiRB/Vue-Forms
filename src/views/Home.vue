<template>
  <form >
    <input type="text" 
      class="form-control my-2" 
      placeholder="ingrese nombre"
      v-model="tarea.nombre"
      >
  </form>
  <p>{{tarea.nombre}}</p>
</template>

<script>


export default {
  name: 'Home',
  components: {
   
  },
  data() {
    return {
      tarea: {
        nombre:""
      }
    }
  },
}
</script>
