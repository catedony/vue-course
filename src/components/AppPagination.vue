<template>
  <nav aria-label="Pagination">
    <ul class="pagination pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" aria-label="Previous" @click="currentPage--">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{ active: page === currentPage }"
      >
        <a class="page-link" @click="currentPage = page">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === pages }">
        <a class="page-link" aria-label="Next" @click="currentPage++">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "AppPagination",
  model: {
    prop: "initPage"
  },
  props: {
    itemsCount: {
      type: Number,
      required: true
    },
    itemsToShow: {
      type: Number,
      required: true
    },
    initPage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.itemsCount / this.itemsToShow);
    }
  },
  watch: {
    initPage() {
      this.setCurrentPage();
    },
    currentPage() {
      this.$emit("input", this.currentPage);
    }
  },
  created() {
    this.setCurrentPage();
  },
  methods: {
    setCurrentPage() {
      if (this.initPage !== this.currentPage) this.currentPage = this.initPage;
    }
  }
};
</script>
