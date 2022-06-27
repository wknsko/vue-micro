<template>
<the-header></the-header>
<div class="container">
<h1>Your Profile</h1>
<div class="profile-body">
    <div class="profile-pic">
        <img src="../assets/icon.jpeg" />
        </div>
            <div class="info">
                <h3>Info</h3>
                <ul>
                    <li><strong>Micro posts: </strong> {{postCount}}</li>
                </ul>
            </div>
    </div>
</div>
</template>

<script>
import { inject, onBeforeMount, onMounted } from 'vue'
import TheHeader from '../components/TheHeader.vue';
import PostService from '../PostService';
export default {
  components: { TheHeader },
    setup() {
        let page = inject('page');
        let login = inject('login');
        let postCount = inject('postCount');
        onMounted( async () => {
            if(postCount.value === 0) {
                let response = await PostService.getPosts();
                postCount.value = response.length
            }
           
        })

        onBeforeMount(() => {
            console.log(postCount.value)
            login.value = true;
            page.value = 'profile'
            
        })

        return {
            page, login, postCount
        }
    }

}
</script>

<style>
.profile-body {
    display: flex;
}
img {
    border-right: 10px solid #fff;
}
ul {
    list-style: none;
}

</style>