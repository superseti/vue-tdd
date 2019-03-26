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
              <td>{{drink.price}} €</td>
              <td>{{drink.amount * drink.price}} €</td>
            </tr>
          </tbody>
        </table>
        <form>
          <div class="form-group row" v-if="ageCheck">
            <label for="ageInput" class="col-2 col-form-label">Age</label>
            <div class="col-10">
              <input type="number" v-model="age" class="form-control form-control-lg" id="ageInput">
            </div>
          </div>
          <button class="btn btn-default" @click="cancel()" type="button">Cancel</button>
          <button
            class="btn btn-success"
            v:disabled="!age && ageCheck"
            @click.stop.prevent="submit()"
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
    const myOrderService = new OrderService();
    var myOrder = myOrderService.currentOrder;
    return {
      orderService: myOrderService,
      order: myOrder,
      numberOfDrinks:
        myOrder &&
        myOrder.reduce(
          (numberOfDrinks, drink) => numberOfDrinks + drink.amount,
          0
        ),
      age: 0,
      ageCheck: myOrder && myOrder.some(drink => drink.isAlcoholic),
      error: ""
    };
  },
  mounted() {
    if (!this.order) {
      this.$router.push("/");
      return;
    }
  },
  methods: {
    submit: function() {
      if (!this.ageCheck || this.isAllowedToBuyAlcohol({ age: this.age })) {
        this.error = null;
        this.$router.push("SuccessOrder");
      } else {
        this.error = "Only adults can buy alcohol!";
        return false;
      }
    },

    cancel: function() {
      this.orderService.clear();
      this.$router.push("/");
    },

    isAllowedToBuyAlcohol: function(customer) {
      return customer.age > 18;
    }
  }
};
</script>