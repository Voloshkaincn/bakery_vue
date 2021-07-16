<template>
  <div class="col-sm-6 col-md-4 col-xl-3">
    <div class="card">
      <img
        :src="require('./../assets/image/' + product.image)"
        :alt="product.title"
      />
      <a :href="'/shop/' + product.id" class="card__name text-center mt-2 mb-1">
        {{ product.title }}
      </a>
      <div class="price">
        <!-- <span class="price_new">{{ product }}</span> -->
        <span class="price_old" v-if="product.sale">{{ product.price }}</span>
      </div>
      <div class="col-12 px-3">
        <button
          type="button"
          class="w-100 btn btn-primary"
          @click="addToCart(product)"
        >
          Add to CART
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    addToCart(product) {
      this.$store.dispatch('ADD_TO_CART', product)     
    },
  },
};
</script>
<style>
.btn-primary {
  color: #fff;
}
.btn-primary:hover {
  color: #fff;
}
.card {
  background: #f7f5f0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding-bottom: 30px;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
}

.price {
  display: flex;
  justify-content: center;
  margin: 0.25em 0 1em;
}
.price_new {
  font-weight: 600;
  color: #ff8126;
}

.price_old {
  font-weight: 400;
  color: #656565;
  margin-left: 0.25em;
  text-decoration: line-through;
}

/* .color {
  color: $primary;
} */
</style>