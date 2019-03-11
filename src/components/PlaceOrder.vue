<template>
  <div>
    <div class="row">
      <h2 class="col-12 display-4">Place order - prrrt</h2>
    </div>
    <div class="row">
      <table class="table col-12">
        <thead>
          <tr>
            <th>Drink</th>
            <th colspan="2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="drink in drinks" :key="drink.name">
            <td>{{drink.name}}</td>
            <td>{{drink.price}} €</td>
            <td>
              <div class="row">
                <div class="col-5 input-group">
                  <div class="input-group-prepend">
                    <button @click="decrement(drink)" class="btn btn-dark">-</button>
                  </div>
                  <input class="form-control" type="number" v-model="drink.amount" readonly>
                  <div class="input-group-append">
                    <button @click="increment(drink)" class="btn btn-dark">+</button>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <th>{{totalPrice()}} €</th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col-12">
        <button
          class="btn btn-success"
          :disabled="!submitEnabled()"
          @click="submit()"
          type="submit"
        >Submit order</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import { getDrinks } from "../services/DrinkService.js";
import { OrderService } from "../services/OrderService.js";

export default {
  data() {
    return {
      drinks: getDrinks(),
      orderService: new OrderService()
    };
  },
  methods: {
    increment: function(drink) {
      drink.amount++;
    },
    decrement: function(drink) {
      drink.amount--;
      if (drink.amount < 0) {
        drink.amount = 0;
      }
    },
    totalPrice: function() {
      return this.drinks.reduce(
        (total, drink) => total + drink.amount * drink.price,
        0
      );
    },
    submitEnabled: function() {
      return this.drinks.some(drink => drink.amount > 0);
    },
    submit: function() {
      this.orderService.currentOrder = this.drinks.filter(
        drink => drink.amount
      );
      this.$router.push("ReviewOrder");
    }
  }
};
</script>