<template>
  <div class="shop">
    <div class="row mb5">
      <ProductCard
        v-for="product in $store.state.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
import ProductCard from "./../components/ProductCard.vue";

export default {
  data: () => {
    return {
      
    };
  },
  components: {
    ProductCard,
  },
};
</script>

<style>
.shop {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
