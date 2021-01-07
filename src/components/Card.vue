<template>
  <div
    class="grid grid-cols-8 bg-white rounded-lg flex items-center relative px-3 py-2"
  >
    <img
      class="col-span- rounded-full bg-black w-20 h-20"
      :src="item.profile.Ima_profile"
      alt=""
    />

    <div class="col-span-1 text-left">
      <p class="text-sm">{{ item.First_name}} {{ item.Last_name}}</p>
      <span class="text-xs text-yellow-400" @click="deleteUser">Eliminar</span>
    </div>

    <div class="col-span-5 text-xs text-left">
      <p>
        {{ item.Description }}
      </p>
    </div>

    <button class="px-2 ml-auto bg-yellow-400 hover:bg-yellow-500 focus:outline-none text-sm text-white rounded-lg px-3 py-2" @click="selectUser">Edit</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      First_name: "",
      Last_name: "",
      Description: "",
    };
  },
  methods: {
    deleteUser() {
        this.$store.dispatch("user/deleteUser", this.item.id).then(()=>{
            this.$store.dispatch("user/getUsers");
        });
    },
    selectUser(){
      console.log("ddd")
      this.$store.dispatch('user/Modal')
      this.$store.commit("user/SELECTED_USER", this.item);
    }
  },
};
</script>
