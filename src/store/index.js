import { createStore } from 'vuex'
import router from '../router'
import rputer from "../router"

export default createStore({
  state: {
    tareas:[],
    tarea: {
      id:"",
      nombre:"",
      categorias: [],
      estado:"",
      numero:0
    }
  },
  mutations: {
    set(state, payload){
      state.tareas.push(payload)
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter((item) => item.id !== payload )
    },
    tarea(state, payload){
      if(!state.tareas.find(item => item.id === payload)){
        router.push("/")
        return 
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push("/")
    }
  },
  actions: {
    setTareas({commit},tarea){
      commit("set", tarea)
    },
    deleteTareas({commit}, id){
      commit("eliminar", id);
    },
    setTarea({commit}, id ){
      commit("tarea", id)
    },
    updateTarea({commit}, tarea){
      commit("update", tarea)
    }
  },
  modules: {
  }
})
