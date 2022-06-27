<template>
    <div class="header">
        <div class="logo"> Micro</div>
        <div class="searchbar">
            <input id="search" />
            <i class="feather-props" data-feather="search"></i>
        </div>
        <div class="menu">
            <ul>

                <li :class="item.active ? 'active' : ''" v-for="item in menu" :key="item.name">
                <router-link :to="item.url"> {{ item.name }} </router-link>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
import { inject, onBeforeMount, onMounted, ref } from 'vue'
export default {
    setup() {
        let page = inject('page');
        // const findPage = (url) => {
        //         if( url === '/' + page ){
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
        
            const menuLogin = [
                { name: 'Home', url: '/', active: page.value === 'home' ? true : false },
                { name: 'Profile', url: '/profile', active: page.value !== 'profile' ? false : true },
                { name: 'Sign out', url: '/login', active: false }
            ]
            const menuLogout = [
               
                { name: 'Log in', url: '/login', active: page.value === 'loginActive' ? true : false },
                { name: 'About project', url: '/about', active: page.value === 'about' ? true : false }
        ]
            const feather  = inject('feather');
            let login = inject('login');
            
            let menu = ref(login.value ? menuLogin : menuLogout);
            
   onBeforeMount(() => {
       
   })
    onMounted( () => {
        
        feather.replace()
       

    })
    return {
        menu, menuLogin, menuLogout, feather, login, page
    }
    },
    components: {

    }
}

</script>

<style>
a {
    color: inherit;
    text-decoration: none;
}
.header {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
}

.menu ul {
    display: inline-flex;
    list-style: none;

}

.menu li {
    margin-right: 20px;
    cursor: pointer;
}

.searchbar {
    display: flex;
    align-items: center;
    margin: 0 20px;
    cursor: pointer;

}

.feather-props {
    padding: 0px 0px 0px 10px;
    padding-left: 10px;
    background: transparent;
    text-decoration: none;
    align-items: center;
}

.searchbar input {
    padding: 4px 10px;
    border-radius: 20px;
    border: 0.1rem solid black;
}

.searchbar input:focus {
    outline: none;
}

.active {
    color: #8497a9;
}
</style>