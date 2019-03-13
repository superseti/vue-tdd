import SuccessOrder from '../../../src/components/SuccessOrder.vue';
import { mount } from '@vue/test-utils';
import { OrderService } from '../../../src/services/OrderService.js';

describe('SuccessOrder', () => {

    let sut, routerMock;

    beforeEach(() => {
        new OrderService().currentOrder = [];
        sut = mount(SuccessOrder).vm;
        routerMock = {
            push: jest.fn()
        };
        sut.$router = routerMock;
    });

    it('should be constructed', () => {
        expect(sut).toBeTruthy();
    });
    it('should navigate to initial page on new order', () => {
        sut.newOrder();
        expect(routerMock.push).toHaveBeenCalled();
    });
});