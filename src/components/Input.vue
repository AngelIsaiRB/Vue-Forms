<template>
   <input type="text" 
      class="form-control my-2" 
      placeholder="ingrese nombre"
      v-model.trim="tarea.nombre"
      >
      <div class="form-check form-check-inline">
        <input 
          type="checkbox"
          id="check-1"
          class="form-check-input"
          v-model="tarea.categorias"
          value="javaScrip"
        >
        <label for="check-1" class="form-check-label">Java</label>
      </div>
      <div class="form-check form-check-inline">
        <input 
          type="checkbox"
          id="check-2"
          class="form-check-input"
          v-model="tarea.categorias"
          value="NodeJs"
        >
        <label for="check-2" class="form-check-label">NodeJs</label>
      </div>
      <div class="mt-2">
        <div class="form-check form-check-inline">
          <input 
          type="radio"
          id="radio-1"
          class="form-check-input"
          v-model="tarea.estado"
          value="urgente"
        >
        <label for="radio-1" class="form-check-label">Urgente</label>
        </div>
        <div class="form-check form-check-inline">
          <input 
          type="radio"
          id="radio-2"
          class="form-check-input"
          v-model="tarea.estado"
          value="relax"
        >
        <label for="radio-2" class="form-check-label">relax</label>
        </div>
      </div>

      <div class="mt-2">
        <input 
          type="number"
          class="form-control"
          v-model.number="tarea.numero"
        >
      </div>

      <button
        class="btn btn-dark mt-2 btn-block"
        type="submit"
        :disabled="habilitarButton"
      >
      Procesar
      </button>
</template>

<script>
export default {
   props: {
       tarea: Object
   },
    computed: {
    habilitarButton() {
      return this.tarea.nombre.trim() === "" ? true :false 
    }
  },
}
</script>
