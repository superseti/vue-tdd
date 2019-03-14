import ReviewOrder from '../../../src/components/ReviewOrder.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { OrderService } from '../../../src/services/OrderService.js';

describe('PlaceOrderComponent', () => {

    let sut, routerMockPush, orderService, localVue, router;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(VueRouter);
        router = new VueRouter();

        routerMockPush = jest.spyOn(router, 'push');
        orderService = new OrderService();
        orderService.currentOrder = [];
    });

    describe('on constructor', () => {
        it('should set order, numberOfDrinks and ageCheck properties', () => {
            var order = orderService.currentOrder;
            order.push({ name: 'Robo Beer', price: 2, amount: 2 });
            order.push({ name: 'Robo(w)ine', price: 3, amount: 1 });
            orderService.currentOrder = order;

            sut = shallowMount(ReviewOrder, {
                localVue,
                router
            }).vm;

            expect(sut.order).toEqual(orderService.currentOrder);
        });

        it('should navigate back if there is no order', () => {
            orderService.currentOrder = null;
            sut = shallowMount(ReviewOrder, {
                localVue,
                router
            }).vm;

            expect(routerMockPush).toHaveBeenCalled();
        });
    });

    describe('submit', () => {
        beforeEach(() => {
            sut = shallowMount(ReviewOrder, {
                localVue,
                router
            }).vm;
        });
        it('should allow if ageCheck is disabled', () => {
            sut.ageCheck = false;
            sut.submit();
            expect(routerMockPush).toHaveBeenCalled();
        });

        it('should allow if user is 24', () => {
            sut.ageCheck = true;
            sut.age = 24;
            sut.submit();
            expect(routerMockPush).toHaveBeenCalled();
        });

        it('should not allow if user is 12', () => {
            sut.ageCheck = true;
            sut.age = 12;
            sut.submit();
            expect(sut.error).toBeTruthy();
        });
    });

    describe('cancel', () => {
        beforeEach(() => {
            sut = shallowMount(ReviewOrder, {
                localVue,
                router
            }).vm;
        });
        it('should navigate back', () => {
            sut.cancel();
            expect(routerMockPush).toHaveBeenCalled();
        });
    });
});