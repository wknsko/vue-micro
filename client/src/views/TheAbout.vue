<template>
<the-header></the-header>
  <div class="container">
    <h1>About</h1>
    <div class="about-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iure illo quo fugiat cum, in officia. Nulla quia deserunt natus provident ratione est aliquam aspernatur dolore, quod aut adipisci totam eius ipsa nam a odio libero, quisquam assumenda tempore ut optio minima ea, sequi incidunt. Eum ipsum corrupti deserunt nihil est quibusdam perspiciatis neque molestias sit eligendi, vel quasi itaque esse impedit explicabo, ut delectus consequatur id ea laudantium ducimus pariatur. Nam quaerat ratione magnam nobis a molestias, tempore ad eum deserunt enim, modi omnis rem fugit unde necessitatibus earum? Aperiam iusto illum commodi nobis expedita soluta, vitae eius deserunt!</div>
  </div>
</template>

<script>
import { inject, onBeforeMount, } from '@vue/runtime-core'
import TheHeader from '../components/TheHeader.vue'

export default {
    setup(){
        let login = inject('login');
        let page = inject('page')
        
    onBeforeMount(() =>{
        login.value = false;
        page.value = 'about'
    })
        return {
            login,  
        }
    },
  components: { TheHeader },

}
</script>

<style>
.container {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
}

</style>