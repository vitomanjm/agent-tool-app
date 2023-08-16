<template>
    <button @click="toggleStyle">
        <input type="checkbox" class="toggle" checked />
    </button>
</template>

<script>

export default {

    methods: {
        toggleStyle() {
            const html = document.querySelector('html');
            if (html) {
                html.setAttribute('data-theme', html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
            }
        }
    }
}


</script>
<style></style>