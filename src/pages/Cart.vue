<template>
    <div>
        <h1>Cart - {{cartCount}}</h1>
        <ul>
            <li v-for="product in  cart" 
                :key="product.id">{{product.title}} - {{product.count}}
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['cartCount'])
    }

}
</script>
