<template>
    <div class="pure-menu pure-menu-horizontal">
        <div class="container">
            <router-link :to="{path: '/'}" class="pure-menu-heading pure-menu-link">HackerNews</router-link>
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <router-link :to="{path: '/new'}" class="pure-menu-link">New Stories</router-link>
                </li>
                <li class="pure-menu-item">
                    <router-link :to="{path: '/best'}" class="pure-menu-link">Best Stories</router-link>
                </li>
                <li class="pure-menu-item">
                    <router-link :to="{path: '/shows'}" class="pure-menu-link">Shows Stories</router-link>
                </li>
                <li class="pure-menu-item">
                    <router-link :to="{path: '/job'}" class="pure-menu-link">Job Stories</router-link>
                </li>
                <li class="pure-menu-item">
                    <router-link :to="{path: '/ask'}" class="pure-menu-link">Ask Stories</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'    
}
</script>

<style scoped>
    .pure-menu{
        background-color: #e17842;
    }
    .pure-menu a{
        color: white;
    }
</style>