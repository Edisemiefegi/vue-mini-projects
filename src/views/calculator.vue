<template>
  <backbtn />
  <div class="calculator-container">
    <div class="calculator-box">
      <div class="display">
        <p>{{ screen }}</p>
      </div>
      <div class="operators">
        <button v-for="btn in buttons" :key="btn" @click="display(btn)">
          {{ btn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import backbtn from "@/components/backbtn.vue";
import { ref } from "vue";

const buttons = ref([
  "AC",
  "(",
  ")",
  "DEL",
  "1",
  "2",
  "3",
  "/",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "+",
  "*",
  ".",
  "0",
  "=",
]);
const screen = ref("");

const display = (btn) => {
  if (btn == "AC") {
    screen.value = "";
  } else if (btn == "DEL") {
    let value = screen.value.trim();
    const del = screen.value.length - 1;
    screen.value = value.substring(0, del);
  } else if (btn == "=") {
    let value = screen.value.trim();
    screen.value = eval(value);
  } else {
    screen.value = screen.value + btn;
  }
};
</script>

<style>
.calculator-container {
  width: 100vw;
  height: 100vh;
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calculator-box {
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: silver;
  padding: 10px;
  border-radius: 5px;
}
.display {
  border-radius: 5px;
  width: 100%;
  height: 25%;
  overflow: hidden;
  padding: 10px;
  font-size: 25px;
  background-color: #140404db;
  color: white;
  text-align: right;
}

.operators {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  height: 75%;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.operators button {
  border: none;
  background-color: antiquewhite;
  border-radius: 5px;
  width: 65px;
  padding: 15px;
}
.operators button:active {
  background-color: #f1d4aeaf;
}
</style>
