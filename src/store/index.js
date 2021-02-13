import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id:"",
      nombre:"",
      categorias: [],
      estado:"",
      numero:0
    },
    user: null

  },
  mutations: {
    setUser(state, payload){
      state.user=payload
    },
    // importante error al renderizar si no cumple con la estrctura de "tarea" cuidado problema no aqui si no cuando se imprime la tabla 
    cargar(state, payload) {
     state.tareas = [...state.tareas, ...payload]
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
    async registrarUsuario({commit}, user){
      try {
        const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnoPbZNMPUI0IpbCliteX2v4Wg3baSAwE",{
          method: "POST",
          body: JSON.stringify({
            ...user,
            returnSecureToken:true
          })
        })
        const userDB =await  res.json();
        console.log(userDB)
      } catch (error) {
        console.log(error)
      }
    },
    async cargarLocalStorage({commit}){
      try {
        const res = await fetch('https://vue-exmpls-default-rtdb.firebaseio.com/tareas.json')
        const dataDB = await res.json()
        const arrayTareas = []
        for (let id in dataDB){
          arrayTareas.push(dataDB[id])
        }
        console.log(arrayTareas)
        commit('cargar', arrayTareas)

      } catch (error) {
        console.log(error)
      }
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
    async deleteTareas({commit}, id){
      try {
        await fetch(`https://vue-exmpls-default-rtdb.firebaseio.com/tareas/${id}.json`,{
          method: "DELETE",
        });
        commit("eliminar", id);
      } catch (error) {
        
      }
    },
    setTarea({commit}, id ){
      commit("tarea", id)
    },
    async updateTarea({commit}, tarea){
      try {
        const resp = await fetch(`https://vue-exmpls-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method: "PATCH",
          body: JSON.stringify(tarea),          
        })
        const dataDB = await resp.json()
        // console.log(dataDB)
        commit("update", dataDB)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
