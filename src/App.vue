<template>
    <navBar></navBar>
    <leftMenu>
        <Home>
            <router-view></router-view>
        </Home>
    </leftMenu>
</template>

<script>
import navBar from './layout/navbar.vue'
import leftMenu from './layout/leftMenu.vue'
import footerr from './layout/footerr.vue'
import Home from './layout/Home.vue'


export default {

    components: {
        Home,
        navBar,
        leftMenu,
        footerr,

    },
}



</script>

