<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
   mounted() {
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;
  }
}
</script>
<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   width: 100%;
   height: 100%;
}
</style>
