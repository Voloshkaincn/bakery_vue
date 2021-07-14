<template>
    <div class="product__wrap">
        <h1>{{product.title}}</h1>
        <img
            :src="require('./../assets/image/' + product.image)"
            :alt="product.title"
        />
        <div class="price">
            {{ product.price }}
        </div>
    </div>
</template>
<script>
export default {
    props: ['product']
}
</script>