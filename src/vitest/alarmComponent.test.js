import { flushPromises, mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import  { alarmComponent } from '../views/Alarm.vue';



test('alarmButton Test', async () => 
{ 
    expect(alarmComponent).toBeTruthy()

    const wrapper = mount(alarmComponent)

    await wrapper.find('button').trigger('click')

    await flushPromises()
    
    await vi.dynamicImportSettled()

    expect(wrapper.html()).toBe(true)
})