<template>
  <div class="container-fluid users">
    <h1 class="h4 text-center mb-4">Список пользователей</h1>
    <div v-if="!usersAreLoaded" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <template v-else>
      <p>Всего пользователей: {{ usersCount }}</p>
      <users-viewer :users="users"></users-viewer>
    </template>
  </div>
</template>

<script>
import UsersViewer from "@/components/UsersViewer.vue";
import axios from "axios";

export default {
  name: "Users",
  components: {
    UsersViewer
  },
  data: function() {
    return {
      users: [],
      usersAreLoaded: false
    };
  },
  computed: {
    usersCount() {
      return this.users.length;
    }
  },
  created: function() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("http://localhost:3000/users")
        .then(response => {
          this.users = response.data;
          this.usersAreLoaded = true;
        })
        .then(() => console.log("Users are loaded"))
        .catch(e => console.error(e));
    }
  }
};
</script>
