<template>
  <header class="nav">
    <a class="nav__item" href="/#/home">Home</a>
    <a class="nav__item" href="/#/aboutus">About Us</a>
    <a class="nav__item" href="/#/shop">Shop</a>
    <a class="nav__item" href="/#/ogin">Login</a>
    <a class="nav__item" href="/#/services">Services</a>
    <a class="nav__item" href="/#/cart">Cart - {{cartTotal}}</a>
    <button @></button>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
  export default{
    computed:{
      ...mapGetters(['cartTotal']),
    }
  }
</script>
<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  &__item {
    margin: 0 20px;
  }
}
</style>