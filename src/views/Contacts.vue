<template>
  <div class="container-fluid users">
    <h1 class="h4 text-center mb-4">Контакты пользователей</h1>
    <div v-if="!usersAreLoaded" class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <template v-else-if="usersCount">
      <users-phone-book :users="users"></users-phone-book>
    </template>
    <template v-else>
      <p>{{ message }}</p>
    </template>
  </div>
</template>

<script>
import UsersPhoneBook from "@/components/UsersPhoneBook.vue";
import axios from "axios";

export default {
  name: "Contacts",
  components: {
    UsersPhoneBook
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
