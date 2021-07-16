<template>
  <div id="app">
    <PageHeader></PageHeader>

    <div class="test">
      {{ $store.state.count }}
      <button @click="$store.commit('increment')">increment</button>
    </div>

    <router-view />

    <slider />

    <v-select :options="['Canada', 'Ukraine', 'USA']"> </v-select>

    <ul>
      <li v-for="(btn, i) in btns" :key="btn">
        <button @click="showModal(btn, i)">Modal {{ i + 1 }}</button>
      </li>
    </ul>

    <modal
      @close="modalClose($event)"
      v-if="show_modal1"
      :title="button_title"
      :index="1"
    >
      <h2>Login</h2>
    </modal>

    <modal
      @close="modalClose($event)"
      v-if="show_modal2"
      :title="button_title"
      :index="2"
    >
      <h2>Cart</h2>
    </modal>

    <modal
      @close="modalClose($event)"
      v-if="show_modal3"
      :title="button_title"
      :index="3"
    >
      <h2>Modal 3</h2>
    </modal>

    {{ cart }}
  </div>
</template>
<script>
import Modal from "./components/Modal";
import Slider from "./components/Slider.vue";

export default {
  data: () => {
    return {
      cart: {},
      button_title: "",
      btns: ["title1", "title2", "title3"],
      show_modal1: false,
      show_modal2: false,
      show_modal3: false,
    };
  },
  methods: {
    showModal(btn, i) {
      this["show_modal" + (i + 1)] = true;
      this.button_title = btn;
    },
    modalClose(event) {
      this["show_modal" + event] = false;
      console.log(event);
    },
  },

  name: "App",
  components: {
    Modal,
    Slider,
  },
};
</script>
<style lang="scss">
$var2: green;
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;

}
.test{
  padding: 30px;
  border: 1px solid #000;
  margin: 50px;
}
</style>