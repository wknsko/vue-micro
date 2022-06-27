<template>
<router-view></router-view>

</template>

<script>
import { provide, ref} from 'vue';
export default {
  setup() {
    let login = ref(true);
    let page = ref('');
    let postCount = ref(0);
    provide('login', login);
    provide('page', page);
    provide('postCount', postCount)
    return {
      login
    }
  }
  
}
</script>

<style>

body {
  background-color: rgba(230, 230, 250, 0.722);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
