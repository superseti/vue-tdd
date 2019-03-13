import { OrderService } from '../../../src/services/OrderService.js';

describe('OrderService', () => {

    var sut;

    beforeEach(() => {
        sut = new OrderService();
        sut.clear();
    });

    describe('currentOrder', () => {
        it('should retrieve given order', () => {
            sut.currentOrder = 'foobar';
            expect(sut.currentOrder).toBe('foobar');
        });

        it('should retrieve from localStorage if local copy does not exist', () => {
            sut.currentOrder = 'foobar';
            sut._currentOrder = undefined;
            expect(sut.currentOrder).toBe('foobar');
        });
    });
});
