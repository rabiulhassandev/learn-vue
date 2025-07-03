<template>
    
    <div class="container pt-5">
        <button class="btn btn-success mx-1" @click="increment">Increment</button>
        <button class="btn btn-danger mx-1" @click="decrement">decrement</button>
        <h1>{{ count }}</h1>

        <hr>

        <ComposibleButton />
    </div>

</template>

<script setup>
    import { useCounter } from './composible/useCounter';
    import ComposibleButton from './components/ComposibleButton.vue';

    const { count, increment, decrement } = useCounter(4);
</script>