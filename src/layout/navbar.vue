<template>
    <div class="navbar">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
                <ul class="menu dropdown-content mt-3 p-1 rounded-box w-52">

                    <li>

                        <button>
                            <leftMenu>
                            </leftMenu>
                        </button>

                    </li>

                </ul>

            </div>
        </div>

        <div class="flex navbar-center">
            <router-link class="btn btn-ghost normal-case text-xl" :to="{ name: 'Home' }">AGENT TOOL</router-link>
        </div>
        
    </div>
</template>

<script>
import leftMenu from "./leftMenu.vue";
export default {

    components: {

        leftMenu,
    }
}

</script>