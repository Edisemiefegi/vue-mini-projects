<template>
  <backbtn />
  <div class="sticky-container">
    <div>
      <div @click="showinput = true" v-if="!showinput" class="show-input">
        <i style="font-size: 10rem" class="pi pi-plus"></i>
      </div>
      <div v-else class="textarea-box">
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="Enter your text here..."
          v-model="input"
        ></textarea>
        <div class="stickybtn">
          <button @click="create">Enter</button>
        </div>
      </div>
    </div>
    <div
      v-for="(note, i) in notes"
      :key="i"
      class="notes"
      :style="`background-color:${note.color}`"
    >
      <i class="pi pi-times" @click="remove(i)"></i>
      {{ note.text }}
    </div>
  </div>
</template>

<script setup>
import Backbtn from "@/components/backbtn.vue";
import { onMounted, ref } from "vue";

const showinput = ref(false);
const input = ref("");
const notes = ref([]);
const colors = ref(["yellow", "lightblue", "pink", "orange", "lightgreen"]);

onMounted(() => {
  getLocalStorage();
});

const updateLocalStorage = () => {
  localStorage.setItem("notes", JSON.stringify(notes.value));
};
const getLocalStorage = () => {
  const stickynote = localStorage.getItem("notes");
  notes.value = stickynote ? JSON.parse(stickynote) : [];
};

const create = () => {
  if (!input.value == "") {
    notes.value.push({
      text: input.value,
      color: randomColor(),
    });
    input.value = "";
    showinput.value = false;
    updateLocalStorage();
  }
};

const remove = (index) => {
  notes.value = notes.value.filter((e, i) => i !== index);
};

const randomColor = () => {
  return colors.value[Math.floor(Math.random() * colors.value.length)];
};
</script>

<style scoped>
.sticky-container {
  background-color: #2f363e;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  padding: 40px 70px;
}
.show-input {
  background-color: #49525d;

  width: 270px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.textarea-box {
  width: 270px;
  height: 250px;
  /* border: 2px solid red; */
  position: relative;
  background-color: white;
}
.textarea-box textarea {
  height: 80%;
  width: 100%;
  outline: none;
  padding: 10px;
  overflow: auto;
  border: none;
}
.stickybtn {
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0px;
  left: 0px;
}
.stickybtn button {
  cursor: pointer;

  width: 100%;
  padding: 8px;
  background-color: #2f363e;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5px;
}
.notes {
  width: 270px;
  height: 250px;
  /* background-color: yellow; */
  padding: 15px;
  text-align: justify;
  word-break: break-all;
  position: relative;
  overflow: auto;
}
.notes i {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>
