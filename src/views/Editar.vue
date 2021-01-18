<template>
  editar id:  {{$route.params.id}}  {{tarea}}
  <form @submit.prevent="updateTarea(tarea)">
    <InputVue :tarea="tarea"/>
  </form>
</template>

<script>
import {mapState, mapActions} from "vuex"
import InputVue from '../components/Input.vue'
export default {
    components:{
        InputVue
    },
    computed:{
        ...mapState(["tarea"])
    },
    methods: {
        ...mapActions(["setTarea", "updateTarea"])
    },
    created () {
        this.setTarea(this.$route.params.id)
    },

}
</script>
