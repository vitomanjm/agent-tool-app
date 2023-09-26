<template>

        <div class="navbar">
            <div class="navbar-start">
            </div>

            <div class="flex navbar-center">
                <router-link class="btn btn-ghost normal-case text-xl ml-10" :to="{ name: 'Home' }">AGENT TOOL</router-link>
            </div>

            <div class="navbar-end">
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



