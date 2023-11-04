<template>
  <backbtn />
  <div class="boxes-con">
    <div class="boxes calan">
      <h1>{{ year }}</h1>
      <p>{{ month }}</p>
      <p>{{ week }}</p>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script setup>
import backbtn from "@/components/backbtn.vue";
let monthName = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
let weekName = ["sun ", "mon", "tue", "wed", "thur", "fri", "sat"];
const date = new Date();
const year = date.getFullYear();
const month = monthName[date.getMonth()];
const week = weekName[date.getDay()];
const day = date.getDate();
</script>

<style>
.calan p {
  font-weight: bold;
  font-size: larger;
}
</style>
