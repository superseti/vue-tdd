import PlaceOrder from '../../../src/components/PlaceOrder.vue';
import { mount } from '@vue/test-utils';

describe('PlaceOrder', () => {

  let sut, routerMock;

  beforeEach(() => {
    sut = mount(PlaceOrder).vm;
    routerMock = {
      push: jest.fn()
    };
    sut.$router = routerMock;
  });

  it('should have 3 drinks', () => {
    expect(sut.drinks.length).toBe(3);
  });

  it('should increment the drink amount on increment', () => {
    const roboBeer = { name: 'Robo Beer', amount: 0 };
    sut.increment(roboBeer)
    expect(roboBeer.amount).toEqual(1);
  });

  it('should decrement the drink amount on decrement', () => {
    const roboBeer = { name: 'Robo Beer', amount: 5 };
    sut.decrement(roboBeer)
    expect(roboBeer.amount).toEqual(4);
  });

  it('should go below 0 on decrement', () => {
    const roboBeer = { name: 'Robo Beer', amount: 0 };
    sut.decrement(roboBeer)
    expect(roboBeer.amount).toEqual(0);
  });

  it('should retrieve the calculate the total price', () => {
    sut.drinks[0].amount = 2;
    sut.drinks[0].price = 2;
    sut.drinks[1].amount = 3;
    sut.drinks[1].price = 2.8;
    expect(sut.totalPrice()).toEqual(2 * 2 + 3 * 2.8);
  });

  it('should not disable submit button if there are no drinks selected yet', () => {
    expect(sut.submitEnabled()).toBeFalsy();
  });

  it('should navigate to next page on submit', () => {
    sut.submit();
    expect(routerMock.push).toHaveBeenCalled();
  });
});