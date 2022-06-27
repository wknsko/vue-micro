<template>
    <the-header></the-header>
    <div class="tweet-input">
        <h3>What's happening?</h3>
        <textarea type="text" v-model="text" class="tweet"></textarea><br />
        <button @click="createPost" class="btn-input">Publish your thought</button>
    </div>

    <div class="tweet-list">
        <h3>Your Micro posts</h3>
        <div v-for="(tweet, i) in tweets" :key="i" class="tweet-list-body">
            <div class="tweet-icon">
                <img src="../assets/icon.jpeg">
            </div>
            <div class="tweet-body">
                <div class="tweet-author">@{{ username }}</div>
                <div class="tweet-text">{{ tweet.text }}</div>
                <div class="tweet-date">{{ changeDate(tweet.date) }}</div>
            </div>
            <button v-if="user" class="remove-btn" @click="removePost(tweet._id)">Remove</button>
        </div>
    </div>
</template>

<script>

import TheHeader from '../components/TheHeader.vue';

import { inject, onBeforeMount, reactive, ref, provide } from 'vue';
import PostService from '../PostService.js';


export default {
    name: 'App',
    setup() {
        let user = true;
        let login = inject('login');
        const username = "pootinghuilo";
        let tweets = reactive([]);
        provide('posts', tweets);
        let text = ref('');
        let page = inject('page');
        let postCount = inject('postCount');

        let changeDate = (date) => {
            const formDate = new Date(date); 
            let min = new Date(date).getMinutes().toString();
            let day = formDate.getDate();
            let month = formDate.getMonth() + 1;
            return `${day}. ${month}. ${new Date(date).getFullYear()}  ${new Date(date).getHours()}:${min.length === 1 ? '0' + min : min}`
        };
        let getPosts = async () => {
            const response = await PostService.getPosts();
            if (tweets.length === 0) {
                response.forEach((e) => {
                    tweets.unshift(e)
                })} else {
                await tweets.splice(0, tweets.length)
                response.forEach((e) => {
                    tweets.unshift(e)

                })
                
            }
            postCount.value = tweets.length;
            
        }
        const createPost = async () => {
            await PostService.insertPost(text.value);
            await getPosts();
            text.value = ''
            postCount.value = tweets.length;

        }
        const removePost = async (id) => {
            await PostService.deletePost(id);
            await getPosts();
            postCount.value = tweets.length;

        }


        onBeforeMount(() => {
            login.value = true;
            console.log('last p: ' + page.value);
            page.value = 'home';
            getPosts();
        })

        return {
            tweets,
            username,
            text,
            changeDate,
            user,
            getPosts,
            createPost,
            removePost, 
            login,
            postCount
        }

    },
    components: {
        TheHeader, 

    }
}
</script>

<style>


.tweet-input {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
}

.tweet {
    width: 80%;
    height: 20vh;
    border-radius: 20px;
    border: 1px solid #2c3e50;
    padding: 20px;

}

.tweet:focus {
    outline: none
}

.btn-input {
    width: 220px;
    padding: 10px 15px;
    margin: 20px;
    border-radius: 20px;
    border: none;
    background-color: #8497a9;
    color: whitesmoke;
    font-size: 0.9rem;
    text-transform: lowercase;
}

.btn-input:hover {
    text-transform: lowercase;
    background-color: #405973b3;
}

.btn-input:active {
    text-transform: lowercase;
    background-color: #8497a9;
}

.tweet-list {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;

}

.tweet-list-body {
    margin: 20px;
    padding: 20px;
    color: #2c3e50;
    background-color: rgba(255, 255, 255, 0.85);
    border: 1px solid #2c3e50;
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: relative;
}

.tweet-author {
    font-weight: 800;
    font-size: 1rem;
    text-align: left;
    padding-bottom: 10px;
}

.tweet-text {
    font-size: 1.1rem;
    text-align: left;
    color: #333;
    font-weight: 400;
    letter-spacing: -1px;

}

.tweet-date {
    padding-top: 30px;
    font-weight: 800;
    font-size: 0.9rem;
    color: #2c3e50;
    text-align: left;
}

.tweet-icon img {
    width: 70px;
    padding: 10px;
}

.tweet-body {
    padding: 10px
}

.remove-btn {
    position: absolute;
    transform: rotate(-90deg);
    right: 0;
    background-color: rgba(255, 255, 255, 0.85);
    border: 1px solid rgb(101, 101, 150);
    ;
    color: rgb(101, 101, 150);
    padding: 6px 10px;
    border-radius: 20px;

}

.remove-btn:active {
    color: rgb(193, 193, 210);
    border-color: rgb(170, 170, 188);
}
</style>