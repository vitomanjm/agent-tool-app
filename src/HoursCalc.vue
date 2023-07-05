<script>
import { ref } from 'vue'

export default {
    data() {
        return {

            tituloBarra: ref('Calculating...!!'),
            isOpen: false
        }
    },

    methods: {
        alerta() {
            alert(this.tituloBarra)
            console.log(this.tituloBarra)
        }
    },

    watch: {
        Open() {
            this.isOpen = !this.isOpen;
        }
    }


}

components: {

}

</script>

<template>
    <div>
        <button @click="alerta">Hours Calculator</button>
    </div>
</template>
