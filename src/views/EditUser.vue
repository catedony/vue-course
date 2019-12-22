<template>
  <div class="container-fluid">
    <h1 class="h4 text-center">Редактирование пользователя</h1>
    <div v-if="!userIsLoaded" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <user-form v-else v-model="user"></user-form>
    <div class="d-flex justify-content-center my-2">
      <button type="button" class="btn btn-primary mr-2" @click="saveChanges">
        Сохранить изменения
      </button>
      <button type="button" class="btn btn-danger" @click="removeUser">
        Удалить пользователя
      </button>
    </div>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import axios from "axios";

export default {
  name: "EditUser",
  components: {
    UserForm
  },
  data: function() {
    return {
      user: {},
      userIsLoaded: false
    };
  },
  computed: {
    userId() {
      return this.$route.params.id;
    }
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      axios
        .get("http://localhost:3000/users/" + this.userId)
        .then(response => {
          this.user = response.data;
          this.userIsLoaded = true;
        })
        .catch(e => console.error(e));
    },
    saveChanges() {
      axios
        .put("http://localhost:3000/users/" + this.userId, this.user)
        .then(() => {
          this.$router.push("/");
        })
        .catch(e => console.error(e));
    },
    removeUser() {
      axios
        .delete("http://localhost:3000/users/" + this.userId)
        .then(() => {
          this.$router.push("/");
        })
        .catch(e => console.error(e));
    }
  }
};
</script>
