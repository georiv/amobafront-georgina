<template>
  <div @click.self="closeModal" class="absolute">
    <div class="bg-gray-100 modalView shadow-md">
      <div class="font-medium bg-white py-4 text-left px-3 text-gray-500">
        Agregar nuevo contacto
      </div>

      <div class="py-3 px-6">
        <div class="flex items-center text-left">
          <p class="text-xs m-2 text-left">Cargar imagen</p>
          <input
            @change="handleImage"
            ref="file"
            type="file"
            accept="image/*"
            id="file"
            class="hidden"
          />
          <div
            v-if="imageUrl == ''"
            class="border-2 border-opacity-40 w-20 h-20 border-dashed border-gray-500 flex items-center justify-center border-solid p-3"
            @click="submitImage"
          >
            <small>upload imagegit init</small>
          </div>
          <img
            @click="submitImage"
            class="user-img mx-3 rounded-pill"
            v-if="imageUrl != ''"
            :src="imageUrl"
            alt=""
          />
        </div>

        <div class="mt-3">
          <label for="name">
            <p class="text-xs text-left">
              Nombre <span class="text-red-500">*</span>
            </p>
            <input
              v-model="newUser.First_name"
              type="text"
              id="name"
              class="w-full outline-none border border-2 border-opacity-40 border-gray-400"
            />
          </label>
        </div>

        <div class="mt-3">
          <label for="name">
            <p class="text-xs text-left">
              Apellido <span class="text-red-500">*</span>
            </p>
            <input
              v-model="newUser.Last_name"
              type="text"
              id="Last_name"
              class="w-full outline-none border border-2 border-opacity-40 border-gray-400"
            />
          </label>
        </div>

        <div class="mt-3">
          <label for="name">
            <p class="text-xs text-left">
              Descripcion <span class="text-red-500">*</span>
            </p>
            <textarea
              v-model="newUser.Description"
              type="text"
              class="w-full outline-none border border-2 border-opacity-40 border-gray-400"
            ></textarea>
          </label>
        </div>

        <button
          @click="save"
          class="mt-10 bg-yellow-400 hover:bg-yellow-500 focus:outline-none py-2 px-8 text-white rounded-lg"
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "Modal",
  directives: {
    ClickOutside,
  },
  data: () => ({
    newUser: {
      First_name: "",
      Last_name: "",
      Description: "",
    },
    image: "",
    imageUrl: "",
  }),
  created() {
    this.loadSelectedUser();
  },
  methods: {
    save() {
      this.$store.dispatch("user/save", this.newUser).then((response) => {
        this.closeModal();
        this.$store.dispatch("user/getUsers");
      });
    },
    closeModal() {
      console.log("closing");
      this.$store.dispatch("user/closeModal");
    },
    loadSelectedUser() {
      if (this.$store.state.user.selectedUser) {
        let user = this.$store.state.user.selectedUser;
        this.newUser.First_name = user.First_name;
        this.newUser.Last_name = user.Last_name;
        this.newUser.Description = user.Description;
        this.newUser["profile"] = user.profile.Ima_profile;
        this.imageUrl = user.profile.Ima_profile;
      }
    },
    submitImage() {
      this.$refs.file.click();
    },

    handleImage() {
      const image = event.target.files[0];
      this.sendImageToBackend(image);
      const imageReader = new FileReader();
      imageReader.readAsDataURL(image);
      imageReader.addEventListener("load", () => {
        this.imageUrl = imageReader.result;
        this.image = image;
      });
    },

    sendImageToBackend(file) {
      this.$store.dispatch("user/upload", file).then((response) => {
        debugger;
        console.log(response);
        this.newUser["Ima_profile"] = response.image;
      });
    },
  },
};
</script>

<style scoped>
img {
  max-width: 80px;
}
.absolute {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  top: 0;
  z-index: 1;
}

.modalView {
  width: 400px;
  height: 470px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>