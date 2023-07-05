<script setup>
import { ref } from 'vue'


const tituloPage = ref('Agent tool')
const logoPage = ref("Logo")
const username = ref("UserName")
</script>


<template>

<div> {{ logoPage }} </div>
<h1> {{ tituloPage }} </h1> 
<h3> {{ username }}</h3> 

</template>
