import { createStore } from 'vuex'
import router from '../router'

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
    cargar(state, payload){
      state.tareas = payload
    },
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
    cargarLocalStorage({commit}){
      
    },
    async setTareas({commit},tarea){
      try {
        const res = await fetch(`https://vue-exmpls-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: "PUT",
          body: JSON.stringify(tarea),
          headers : {
            "Content-Type": "application/json"
          }
        })
        const dataDB = await res.json()
        console.log(dataDB)

        commit("set", tarea)
      } catch (error) {
        console.log(error)
      }
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
