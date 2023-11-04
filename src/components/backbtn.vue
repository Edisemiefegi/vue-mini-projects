<template>
  <button @click="back" class="btn">
    <i class="pi pi-arrow-left"></i>
  </button>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.btn {
  position: fixed;
  top: 20px;
  left: 30px;
  border: none;
  background-color: #0f5167;
  color: white;
  padding: 8px;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
