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

    describe('clear', () => {
        beforeEach(() => {
            sut.currentOrder = 'anythingNotNull';
        });
        it('should set null the current order', () => {
            sut.clear();
            expect(sut.currentOrder).toBe(null);
        });
    });

    describe('localStorage', () => {
        var localStorageGetMock, variableName;

        beforeEach(() => {
            variableName = '_currentOrder';
            localStorageGetMock = jest.spyOn(Storage.prototype, 'getItem');
        });

        it('should use _currentOrder as variable on get', () => {
            sut.currentOrder;
            expect(localStorageGetMock).toHaveBeenCalledWith(variableName);
        });
    });
});
