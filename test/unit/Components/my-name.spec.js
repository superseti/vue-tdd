import { shallowMount, createLocalVue } from '@vue/test-utils'
import MyName from '../../../src/components/my-name.vue';

let sut, localVue, wrapper;

beforeEach(() => {
    localVue = createLocalVue();
    wrapper = shallowMount(MyName, {
        localVue
    });
});

describe('MyName test', () => {
    it('Displays my name when I write it', () => {

        expect(wrapper.vm.name).toBe('My name');

        const input = wrapper.find('input');
        input.element.value = 'Stefan';
        input.trigger('input');

        expect(wrapper.vm.name).toBe('Stefan');
    })
});