<template>
  <div>
    <div class="row">
      <h2 class="col-12 display-4">
        Order review
        <small
          class="text-muted"
        >- {{numberOfDrinks}} drink{{numberOfDrinks > 1? 's' : ''}}</small>
      </h2>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="alert alert-danger" v-if="error" role="alert">
          <h4 class="alert-heading">Prrt!</h4>
          <p>{{error}}</p>
        </div>
      </div>
      <div class="col-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Drink</th>
              <th>#</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="drink in order" :key="drink.name">
              <td>
                <em>{{drink.name}}</em>
              </td>
              <td>{{drink.amount}}</td>
              <td>{{drink.price | currency:'€'}}</td>
              <td>{{drink.amount * drink.price}} €</td>
            </tr>
          </tbody>
        </table>
        <form>
          <div class="form-group row" v-if="cpt.ageCheck">
            <label for="ageInput" class="col-2 col-form-label" v-bind="age">Age</label>
            <div class="col-10">
              <input
                type="number"
                v-model="cpt.age"
                class="form-control form-control-lg"
                id="ageInput"
              >
            </div>
          </div>
          <button class="btn btn-default" @click="cancel()" type="button">Cancel</button>
          <button
            class="btn btn-success"
            v:disabled="!age && ageCheck"
            @click="submit()"
            type="submit"
          >Order</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { OrderService } from "../services/OrderService.js";

export default {
  data() {
    let dataComponent = {};
    dataComponent.order = OrderService.currentOrder;
    if (orderService.currentOrder) {
      dataComponent.order = orderService.currentOrder;
      dataComponent.numberOfDrinks = this.order.reduce(
        (numberOfDrinks, drink) => numberOfDrinks + drink.amount,
        0
      );
      dataComponent.ageCheck = this.order.some(drink => drink.isAlcoholic);
    }

    return dataComponent;
  },
  methods: {
    submit: function() {
      if (!this.ageCheck || this.isAllowedToBuyAlcohol({ age: this.age })) {
        this.error = null;
        this.$location.path("/success");
      } else {
        this.error = "Only adults can buy alcohol!";
      }
    },

    cancel: function() {
      this.orderService.clear();
      this.$location.path("/");
    },

    isAllowedToBuyAlcohol: function(customer) {
      return customer.age > 18;
    }
  }
};
</script>