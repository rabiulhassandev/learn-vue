<template>
    <button class="btn btn-primary mx-1" @click="increment">Increment</button>
    <button class="btn btn-warning mx-1" @click="decrement">decrement</button>
    <h1>{{ count }}</h1>

</template>

<script setup>
    import { useCounter } from '@/composible/useCounter';

    const { count, increment, decrement } = useCounter(20, 5);
</script>