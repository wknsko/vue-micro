<template>
    <the-header></the-header>
    <div class="cointainer">
        <h1>Log into your Micro Account</h1>
        <form @submit.prevent class="login">
            <div class="login-body">
                <label for="username">Enter your username</label>
                <input type="text" id="username" v-model="username">
                <label for="password">Enter your password</label><input type="current-password" id="password"
                    v-model="password">
                <router-link to="/"><button class="btn-login">Log in</button></router-link>
            </div>
        </form>

    </div>
</template>

<script>
import {  inject, onBeforeMount, } from '@vue/runtime-core';

import TheHeader from '../components/TheHeader.vue';


export default {
    name: 'App',
    setup() {
        const username = '';
        const password = '';
        let login = inject('login');
        let page = inject('page');
        
        
       

        onBeforeMount(() => {
            page.value = 'loginActive';
            login.value = false;
            
        })
        return {
            username, password, login, page
        }
    }, components: {
        TheHeader,

    }
}
</script>

<style>
.login {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;


}

.login-body input {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px auto;
    width: 100%;
    max-width: 300px;
    padding: 7px 10px;
    border-radius: 10px;
    border: 1px solid #2c3e50;
}

.login-body input:focus {
    outline: none
}

.btn-login {
    width: 220px;
    padding: 10px 15px;
    margin: 20px;
    border-radius: 20px;
    border: none;
    background-color: #8497a9;
    color: whitesmoke;
    font-size: 0.9rem;
    text-transform: lowercase;
    cursor: pointer;
}

.btn-login:hover {
    text-transform: lowercase;
    background-color: #405973b3;
}

.btn-login:active {
    text-transform: lowercase;
    background-color: #8497a9;
}
</style>