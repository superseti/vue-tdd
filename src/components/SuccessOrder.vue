<template>
  <div>
    <div class="row">
      <h2 class="col-12 display-4">{{numberOfDrinks}} drink{{numberOfDrinks > 1? 's' : ''}}</h2>
    </div>
    <div class="row">
      <div class="col-12">
        <p>Coming right up! ~bzzzt~</p>
        <form>
          <button type="submit" class="btn btn-primary" @click.stop.prevent="newOrder">New order</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { OrderService } from "../services/OrderService.js";

export default {
  data() {
    var orderService = new OrderService();
    return {
      numberOfDrinks: orderService.currentOrder.reduce(
        (numberOfDrinks, drink) => numberOfDrinks + drink.amount,
        0
      ),
      orderService: orderService
    };
  },
  methods: {
    newOrder: function() {
      this.orderService.clear();
      this.$router.push("/");
    }
  }
};
</script>