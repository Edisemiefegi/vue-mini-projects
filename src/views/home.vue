<template>
  <nav>
    <router-link to="/">Home</router-link>
    <div class="container">
      <router-link
        class="box"
        :to="project.to"
        v-for="project in projects"
        :key="project.name"
        >{{ project.name }}</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import { reactive } from "vue";

const projects = reactive([
  {
    name: "Color changer",
    to: "/color-changer",
  },
  {
    name: "Count Down",
    to: "/count-down",
  },
  {
    name: "Todo",
    to: "/todo",
  },
  {
    name: "Sticky Note",
    to: "/sticky-note",
  },
  {
    name: "Calculator",
    to: "/calculator",
  },
  {
    name: "Calandar",
    to: "/calandar",
  },
]);
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
  /* align-items: center; */
  flex-wrap: wrap;
  height: fit-content;
  padding: 20px;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  max-width: 100%;
  height: 100px;
  background-image: linear-gradient(#85bacb, #00008b);
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px lightblue;
}
.box:hover {
  background-image: linear-gradient(#30a0c5, #070780);
}
nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #0f5167;
}
</style>
