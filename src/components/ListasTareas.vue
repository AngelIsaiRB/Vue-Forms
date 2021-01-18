<template>
  <table class="table">
      <thead>
          <tr>
              <th scope="col">id</th>
              <th scope="col">nombre</th>
              <th scope="col">categorias</th>
              <th scope="col">estado</th>
              <th scope="col">numero</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in tareas" :key="item.id">
              <th scope="roe">{{item.id}}</th>
              <th >{{item.nombre}}</th>
              <!-- <th >
                  <span v-for="(categoria, index) in item.categorias" :key="categoria">
                      {{item.categorias.length  === index + 1 ? categoria : categoria+", "}}
                      </span>
              </th> -->
              <th>
                  {{item.categorias.join(", ")}}
              </th>
              <th >{{item.estado}}</th>
              <th >{{item.numero}}</th>
              <th >
                  <button @click="deleteTareas(item.id)" class="btn btn-danger btn-sm">eliminar</button>
              </th>
          </tr>
      </tbody>
  </table>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
    computed:{
        ...mapState(["tareas"])
    },
    methods:{
        ...mapActions(["deleteTareas"])
    }
}
</script>
