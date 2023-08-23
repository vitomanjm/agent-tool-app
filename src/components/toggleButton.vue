<template>
    <button @click="toggleStyle">
        <input type="checkbox" class="toggle" checked />
    </button>
</template>

<script>

export default {

    methods: {
        toggleStyle() {
            const htmlSelector = document.querySelector('html');
            if (htmlSelector) {
                htmlSelector.setAttribute('data-theme', htmlSelector.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
            }
        }
    }
}


</script>
<style></style>