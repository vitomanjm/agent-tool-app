<template>
    <div class="absolute top-28 bottom-20 left-32 right-40 ">
        <div class="flex items-center justify-center">    
            <div class="flex-col space-y-8 p-8 border-2 rounded-box border-current bg-slate-800 text-white">
                <div class="flex items-center justify-center font-bold">
                    <h1 class="text-2xl m-1 p-2">Calculate your hours</h1>
                </div>

                <div class="items-center justify-center m-2 p-4 ">
                    <div class="flex items-center justify-center">
                        <label class="p-2 m-2 font-bold ">Start time:</label>
                        <input class="input input-bordered input-primary w-auto max-w-xs p-2 m-2 text-gray-600" type="time"
                            v-model="HoursCalcStore.startTime" />
                    </div>
                    <div class="flex items-center justify-center">
                        <label class="p-2 m-2 font-bold "> End time: </label>
                        <input class="input input-bordered input-primary w-auto max-w-xs text-gray-600" type="time" v-model="HoursCalcStore.endTime" />
                    </div>
                    <div class="flex items-center justify-center">
                        <button class="btn btn-primary m-4 p-2" @click="HoursCalcStore.calculateHours">
                            Calculate Hours
                        </button>
                        <button class="btn m-4 p-2" @click="HoursCalcStore.close">
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

<script>
import {useStoreHoursCalc} from "../stores/storeHoursCalc.js"

export default {


        setup() {

            const HoursCalcStore = useStoreHoursCalc()
            return { HoursCalcStore }   
}
        

}
</script>

