import Vue from 'vue'
import Vuex from 'vuex'
//VUEX
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    title: 'test',
    products: [
        {
          id: 123,
          title: "Pepperoni Pizza",
          price: 24.99,
          discount: 5,
          image: "image1.jpg",
        },
        {
          id: 234,
          title: "Baked Pancakes",
          price: 44.89,
          discount: 3,
          image: "image1.jpg",
        },
        {
          id: 345,
          title: "Avocado",
          price: 20.0,
          image: "image1.jpg",
        },
        {
          id: 456,
          title: "Bunch of Orange",
          price: 29.99,
          image: "image1.jpg",
        },
      ],
    cart: [],
  },
  getters:{
    cartCount(state){
        return state.cart.length
    },
    cartTotal(state){
        if(state.cart.length > 0){
            return state.cart.reduce((total, el)=>{
                return total + el.count
            }, 0)
        }
        return 0
    }
  },
  actions:{
    ADD_TO_CART({ commit }, product){
        commit('ADD_TO_CART', product);
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    ADD_TO_CART(state, product){
        let hasInCart = false
        state.cart.forEach(el=>{
            if(el.id == product.id){
                hasInCart = true
                return el.count++                
            }
        })
        if(hasInCart){
            return
        } 
        Vue.set(product, 'count', 1)
        state.cart.push(product)
        
    },
  }
})

export default store;