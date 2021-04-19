<template>
  <div id="app">
    <Users />
    <Creact />
  </div>
</template>

<script>
import Users from './components/Main/UsersPage/Users'
import Creact from './components/Main/UsersPage/Creact'

export default {
  name: 'App',
  components: {
    Users,
    Creact
  }
}
</script>

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
