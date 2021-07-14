<template>
    <div class="product">
        <h1>Singl product {{ $route.params.id }}</h1>
        <SingleProduct
            :product="getProduct"
        />
    </div>
</template>
<script>
import SingleProduct from './../components/SinglProduct'
export default {
    components: {
        SingleProduct
    },
    computed:{
        getProduct(){            
            let p = this.$root.products.find(el=>{
                return el.id == this.$route.params.id
            })
            return p
        }
    }
}
</script>