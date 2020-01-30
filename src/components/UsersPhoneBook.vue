<template>
  <div class="users-phone-book">
    <rows-on-page-select v-model="rowsOnPage"></rows-on-page-select>
    <users-list :users="usersToShow">
      <template v-slot:thead>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Телефон</th>
        <th>Email</th>
      </template>
      <template v-slot:row="{ user }">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email }}</td>
      </template>
    </users-list>
    <app-pagination
      v-model="currentPage"
      :items-count="rowsCount"
      :items-to-show="rowsOnPage"
    ></app-pagination>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";
import AppPagination from "@/components/AppPagination.vue";
import RowsOnPageSelect from "@/components/RowsOnPageSelect.vue";
export default {
  name: "UsersPhoneBook",
  components: {
    UsersList,
    AppPagination,
    RowsOnPageSelect
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      rowsOnPage: 5,
      currentPage: 1
    };
  },
  computed: {
    rowsCount() {
      return this.users.length;
    },
    usersToShow() {
      const start = this.rowsOnPage * (this.currentPage - 1);
      const end = start + this.rowsOnPage;
      return this.users.slice(start, end);
    }
  }
};
</script>

<style>
.users-phone-book .table-responsive {
  border: none;
}
</style>
