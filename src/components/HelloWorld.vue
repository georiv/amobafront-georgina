<template>
  <div class="hello bg-gray-200 h-screen py-5 px-10">
    <h1 class="text-right block p-5">AMOBASOFTWARE</h1>

    <div class="flex justify-between items-center">
      <div class="border-black flex items-center bg-white rounded-lg">
        <input
          type="text"
          v-model="search"
          class="rounded-lg focus:outline-none py-2 px-3"
          placeholder="Buscar persona..."
        />
        <button
          @click="getUsers"
          class="bg-yellow-400 hover:bg-yellow-500 focus:outline-none py-2 px-3 text-white rounded-lg"
        >
          submit
        </button>
      </div>

      <button
        @click="openModal"
        class="text-sm bg-yellow-400 hover:bg-yellow-500 focus:outline-none py-2 px-3 text-white rounded-lg"
      >
        Nuevo contacto
      </button>
    </div>

    <div class="my-5 cards pr-5">
      <p v-if="users.length === 0">No hay usuarios en la base de datos</p>
      <Card
        class="my-5"
        :key="index"
        v-for="(element, index) in users"
        :item="element"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { mapGetters } from "vuex";

export default {
  components: { Card },
  name: "HelloWorld",
  data: () => ({
    search: "",
  }),
  computed: {
    ...mapGetters({ users: "user/getUsers" }),
  },
  mounted() {
    // console.log(this.$store);
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.$store.dispatch("user/getUsers", this.search);
    },

    openModal() {
      this.$store.dispatch("user/Modal");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  max-height: 100vh;
  overflow-y: none;
}

.cards {
  max-height: 75vh;
  overflow: auto;
}
</style>
