<template>
  <div id="app">
    <router-view />
    <modal v-if="this.show" />
  </div>
</template>

<script>
import Modal from "./components/Modal";
import { mapGetters } from "vuex";

export default {
  name: "index",
  components: {
    Modal,
  },  computed: {
    ...mapGetters({ show: "user/getModal" }),
  },
  data: () => ({ }),
  created(){
     this.$store.dispatch("user/closeModal")
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
