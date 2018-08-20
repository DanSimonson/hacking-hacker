<template>
    <div class="pure-menu pure-menu-horizontal">
        <div class="container">
            <router-link style="text-decoration:none;" :to="{ path: '/' }" class="pure-menu-heading pure-menu-link">Hacking
                Hacker News
            </router-link>
            <ul class="pure-menu-list">
                <!--<router-link :to="{ path: '/' }" class="pure-menu-heading pure-menu-link">Hacking-Hacker News</router-link>
                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Hacking-Hacker News</a></li>-->
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
    .pure-menu {
        background-color: #E17842;
    }

    .pure-menu a[data-v-9ddb17c0]:hover {
        background-color: aqua;
    }

    .pure-menu a {
        color: white;
    }
</style>