import PlaceOrder from '../../../src/components/PlaceOrder.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

describe('PlaceOrder', () => {

  let sut, routerMockPush, localVue, router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter);
    router = new VueRouter();

    sut = shallowMount(PlaceOrder, {
      localVue,
      router
    }).vm;

    routerMockPush = jest.spyOn(router, 'push');
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

  it('shouldn`t go below 0 on decrement', () => {
    const roboBeer = { name: 'Robo Beer', amount: 0 };
    sut.decrement(roboBeer);
    expect(roboBeer.amount).toEqual(0);
  });

  it('should retrieve the calculate the total price', () => {
    sut.drinks[0].amount = 2;
    sut.drinks[0].price = 2;
    sut.drinks[1].amount = 3;
    sut.drinks[1].price = 2.8;
    var expectedResult = (2 * 2) + (3 * 2.8);
    expect(sut.totalPrice()).toEqual(expectedResult);
  });

  it('should disable submit button if there are no drinks selected yet', () => {
    expect(sut.submitEnabled()).toBe(false);
  });
  it('should not disable submit button if there are drinks selected', () => {
    sut.drinks[0].amount = 2;
    sut.drinks[0].price = 2;
    expect(sut.submitEnabled()).toBe(true);
  });

  it('should navigate to next page on submit', () => {
    var expectedPath = 'ReviewOrder';
    sut.submit();
    expect(routerMockPush).toHaveBeenCalledWith(expectedPath);
  });
});