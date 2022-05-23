<script setup>
import moment from "moment"
import {ref} from "vue"
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
let time =ref(moment().format("YYYY-MM-DD HH:mm:ss")) 
setInterval(()=>{
  time.value = moment().format("YYYY-MM-DD HH:mm:ss")
},1000)
</script>

<template>
<div>
  {{time}}
</div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
