<template>
  <router-view />
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.boxes-con {
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  /* border: 1px solid black; */
  display: flex;
}
.boxes {
  background-image: linear-gradient(#85bacb, #00008b);
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px lightblue;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  max-width: 100%;
  height: 350px;
  padding: 20px;
}
</style>
