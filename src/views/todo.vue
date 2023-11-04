<template>
  <backbtn />
  <div class="todo-container">
    <div class="todo-box">
      <div class="input-box">
        <input
          @keyup.enter="add"
          type="text"
          v-model="name"
          placeholder="Enter your text"
        />
        <button @click="add">ADD</button>
      </div>
      <div>
        <div v-for="(item, i) in lists" :key="i" class="todo-list">
          <div class="todo-item">
            <i
              class="pi pi-circle"
              :class="[item.check ? 'check' : '']"
              @click="checked(i)"
            ></i>

            <p>{{ item.title }}</p>
          </div>
          <i class="pi pi-times" @click="deleted(i)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import backbtn from "@/components/backbtn.vue";
import { onMounted, reactive, ref } from "vue";
let lists = ref([]);

onMounted(() => {
  getTodo();
});

const getTodo = () => {
  const todos = localStorage.getItem("todos");
  lists.value = todos ? JSON.parse(todos) : [];
};

const updateTodo = () => {
  localStorage.setItem("todos", JSON.stringify(lists.value));
};

let name = ref("");
const add = () => {
  if (!name.value == "") {
    lists.value.push({
      title: name.value,
      check: false,
    });
    name.value = "";
    updateTodo();
  }
};

const deleted = (index) => {
  lists.value = lists.value.filter((e, i) => i !== index);
  updateTodo();
};

const checked = (index) => {
  lists.value.find((el, i) => {
    if (i == index) {
      el.check = !el.check;
      updateTodo();
    }
  });
};
</script>

<style>
.todo-container {
  background: linear-gradient(145deg, #153677, #4e085f);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.todo-box {
  background-color: white;
  width: 370px;
  height: fit-content;
  padding: 25px;
  overflow: hidden;
  border-radius: 10px;
}
.input-box {
  width: 100%;
  border-radius: 20px;
  border: none;
  background-color: #e6dcdcf0;
}
.input-box input {
  width: 70%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #e6dcdcf0;
}
.input-box button {
  border: none;
  padding: 10px;
  border-radius: 20px;
  background-color: #f44421;
  color: white;
  width: 30%;
  cursor: pointer;
}
.todo-list {
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.todo-item {
  display: flex;
  word-break: break-all;
  text-align: left;
  gap: 10px;
}

.check {
  background-color: #f44421;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  color: #f44421;
}
</style>
