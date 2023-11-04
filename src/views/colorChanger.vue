<template>
  <div
    class="color-container"
    @mousemove="move"
    :style="`background-color:${background}`"
  >
    <backbtn />
    {{ background }}
  </div>
</template>

<script setup>
import backbtn from "@/components/backbtn.vue";
import { ref } from "vue";

const background = ref("");

const move = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  background.value = `rgb(${x},${y},${x})`;
};
</script>

<style>
.color-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
