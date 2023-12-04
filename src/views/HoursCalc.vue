<template>
    <div >
        <HoursCalcInput  v-if="HoursCalcStore.isOpen" :isOpen="HoursCalcStore.isOpen" @close="HoursCalcStore.close"></HoursCalcInput>
    </div>
</template>


<script>

import HoursCalcInput from '../components/HoursCalcInput.vue'
import {useStoreHoursCalc} from "../stores/storeHoursCalc.js"

export default {

    components: {
        HoursCalcInput,
    },

    setup() {

const HoursCalcStore = useStoreHoursCalc()
return { HoursCalcStore }   
}

}

</script>

