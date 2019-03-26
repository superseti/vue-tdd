import SuccessOrder from '../../../src/components/SuccessOrder.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { OrderService } from '../../../src/services/OrderService.js';

describe('SuccessOrder', () => {

    let sut, localVue, orderService, router, routerMockPush;

    beforeEach(() => {
        var order =
            [
                { name: 'Robo Beer', price: 2, amount: 2 },
                { name: 'Robo(w)ine', price: 3, amount: 1 }
            ];
        orderService = new OrderService();
        orderService.currentOrder = order;

        localVue = createLocalVue()
        localVue.use(VueRouter);
        router = new VueRouter();

        sut = shallowMount(SuccessOrder, {
            localVue,
            router
        }).vm;

        routerMockPush = jest.spyOn(router, 'push');
    });

    it('should be constructed', () => {
        expect(sut).toBeTruthy();
    });

    it('numerOfDrinks', () => {
        var order = orderService.currentOrder;
        order.push({ name: 'Robo Beer', price: 2, amount: 2 });
        order.push({ name: 'Robo(w)ine', price: 3, amount: 1 });
        orderService.currentOrder = order;
        var expectedNumberDrinks = 3;
        expect(sut.numberOfDrinks).toBe(expectedNumberDrinks);
    });
});