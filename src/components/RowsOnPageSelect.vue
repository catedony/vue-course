<template>
  <div class="form-group row">
    <div class="col-sm-1">
      <select v-model.number="rows" class="form-control form-control-sm">
        <option>5</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
      </select>
    </div>
    <label
      for="exampleFormControlSelect1"
      class="col-sm-2 col-form-label col-form-label-sm"
      >cтрок на странице</label
    >
  </div>
</template>

<script>
export default {
  name: "RowsOnPageSelect",
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      rows: 0
    };
  },
  watch: {
    value() {
      this.rows = this.value;
    },
    rows() {
      if (this.value !== this.rows) {
        this.$emit("input", this.rows);
      }
    }
  },
  created() {
    this.rows = this.value;
  }
};
</script>
