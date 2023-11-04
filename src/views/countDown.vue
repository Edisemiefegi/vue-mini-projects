<template>
  <backbtn />
  <div class="boxes-con">
    <div class="boxes count-box">
      <h1>Count</h1>
      <h1>{{ number }}</h1>
      <div>
        <button @click="number++">Add</button>
        <button @click="reduce">Reduce</button>
      </div>
      <button @click="countDown" id="countdown">Count down from 20</button>
    </div>
  </div>
</template>

<script setup>
import backbtn from "@/components/backbtn.vue";
import { ref } from "vue";

let number = ref(0);
let numbertwo = ref();

const reduce = () => {
  if (!number.value <= 0) {
    number.value--;
  }
};

const interval = ref(null);

const countDown = () => {
  numbertwo.value = 20;
  clearInterval(interval.value);

  interval.value = setInterval(() => {
    if (numbertwo.value > -1) {
      number.value = numbertwo.value;
      numbertwo.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
};
</script>

<style>
.count-box button {
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: darkblue;
  margin-left: 10px;
}
#countdown {
  width: 100%;
  margin-left: 0px;
}
</style>
