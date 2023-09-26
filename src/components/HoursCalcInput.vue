
<script>
import {useStoreHoursCalc} from "../stores/storeHoursCalc.js"

export default {


        setup() {

            const HoursCalcStore = useStoreHoursCalc()
            return { HoursCalcStore }   
}
        

}
</script>

<template>
    <div class="absolute top-28 bottom-20 left-32 right-40">
        <div class="flex items-center justify-center">
            <div class="flex-col space-y-8 p-8">
                <div class="flex items-center justify-center border-2 rounded-box font-bold">
                    <h1 class="text-2xl m-1 p-2">Calculate your hours</h1>
                </div>

                <div class="items-center justify-center border-2 rounded-box  m-2 p-4">
                    <div class="flex items-center justify-center">
                        <label class="p-2 m-2">Start time:</label>
                        <input class="input input-bordered input-primary w-auto max-w-xs p-2 m-2" type="time"
                            v-model="HoursCalcStore.startTime" />
                    </div>
                    <div class="flex items-center justify-center">
                        <label class="p-2 m-2"> End time: </label>
                        <input class="input input-bordered input-primary w-auto max-w-xs" type="time" v-model="HoursCalcStore.endTime" />
                    </div>
                    <div class="flex items-center justify-center">
                        <button class="btn btn-primary m-4 p-2" @click="HoursCalcStore.calculateHours">
                            Calculate Hours
                        </button>
                        <button class="btn btn-ghost m-4 p-2" @click="HoursCalcStore.close">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center" v-if="HoursCalcStore.hoursResult">
            <p class="border-2 rounded-box font-bold m-2 p-4"> Hours calculated: {{ HoursCalcStore.hoursResult }} </p>
        </div>
    </div>
</template>
