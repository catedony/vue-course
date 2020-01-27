<template>
  <div class="container-fluid users">
    <h1 class="h4 text-center mb-4">Список пользователей</h1>
    <div v-if="!usersAreLoaded" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <template v-else-if="usersCount">
      <p>Всего пользователей: {{ usersCount }}</p>
      <users-viewer :users="users"></users-viewer>
    </template>
    <template v-else>
      <p>{{ message }}</p>
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
      usersAreLoaded: false,
      message: ""
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
          if (!this.users.length) this.message = "Пользователи отсутствуют";
        })
        .catch(e => (this.message = "В процессе загрузки произошла ошибка"))
        .finally(() => (this.usersAreLoaded = true));
    }
  }
};
</script>
