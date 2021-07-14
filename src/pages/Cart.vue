<template>
    <div>
        <h1>Cart</h1>
        <ul>
            <li v-for="product in $root.cart" :key="product.id">{{product.title}}</li>
        </ul>
    </div>
</template>