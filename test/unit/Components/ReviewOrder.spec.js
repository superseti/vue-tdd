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
        it('should set default values', () => {
            var order = orderService.currentOrder;
            order.push({ name: 'Robo Beer', price: 2, amount: 2 });
            order.push({ name: 'Robo(w)ine', price: 3, amount: 1 });
            orderService.currentOrder = order;

            sut = shallowMount(ReviewOrder, {
                localVue,
                router
            }).vm;

            expect(sut.order).toEqual(orderService.currentOrder);
            expect(sut.ageCheck).toBe(false);
            var expectedNumberDrinks = 3;
            expect(sut.numberOfDrinks).toBe(expectedNumberDrinks);
            var emptyString = '';
            expect(sut.error).toBe(emptyString);
        });

        it('should check age with alcoholic drinks', () => {
            var order = orderService.currentOrder;
            order.push({ name: 'Robo Beer', price: 2, amount: 2, isAlcoholic: true });
            order.push({ name: 'Robo(w)ine', price: 3, amount: 1, isAlcoholic: true });
            orderService.currentOrder = order;

            sut = shallowMount(ReviewOrder, {
                localVue,
                router
            }).vm;

            expect(sut.ageCheck).toBe(true);
        });

        it('should navigate back if there is no order', () => {
            orderService.currentOrder = null;
            sut = shallowMount(ReviewOrder, {
                localVue,
                router
            }).vm;

            var expectedRoute = '/';
            expect(routerMockPush).toHaveBeenCalledWith(expectedRoute);
        });
        it('should not navigate back if there is order', () => {
            var order = orderService.currentOrder;
            order.push({ name: 'Robo Beer', price: 2, amount: 2, isAlcoholic: true });
            order.push({ name: 'Robo(w)ine', price: 3, amount: 1, isAlcoholic: true });
            orderService.currentOrder = order;
            sut = shallowMount(ReviewOrder, {
                localVue,
                router
            }).vm;

            expect(routerMockPush).not.toHaveBeenCalled();
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
            var expectedRoute = 'SuccessOrder';
            expect(routerMockPush).toHaveBeenCalledWith(expectedRoute);
        });

        it('should allow if user is 24', () => {
            sut.ageCheck = true;
            sut.age = 24;
            sut.submit();
            var expectedRoute = 'SuccessOrder';
            expect(routerMockPush).toHaveBeenCalledWith(expectedRoute);
        });

        it('should not allow if user is 12', () => {
            sut.ageCheck = true;
            sut.age = 12;
            var result = sut.submit();
            expect(sut.error).toBeTruthy();
            expect(result).toBe(false);
        });

        it('should not allow if user is 18', () => {
            sut.ageCheck = true;
            sut.age = 18;
            var result = sut.submit();
            expect(sut.error).toBeTruthy();
            expect(result).toBe(false);
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
            var expectedRoute = '/';
            expect(routerMockPush).toHaveBeenCalledWith(expectedRoute);
        });
    });
});