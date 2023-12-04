<template>

        <div class="navbar mt-2">
            <div class="navbar-start">
            </div>

            <div class="flex navbar-center">
                <router-link class="btn btn-ghost normal-case text-xl ml-24" :to="{ name: 'Home' }">AGENT TOOL</router-link>
            </div>

            <div class="navbar-end mr-4">
                <toggleButton></toggleButton>
            </div>
        </div>

</template>

<script>
import toggleButton from "../components/toggleButton.vue";

export default {

    components: {

        toggleButton,
    },

};
</script>
<style>
.navbar-start
{
    width: 45%
}

</style>



