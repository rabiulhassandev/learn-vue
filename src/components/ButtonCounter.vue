<template>
    <button @click="++count" class="btn btn-warning">Clicked {{ count }} times</button>
</template>



<script setup>
    import { ref } from "vue" 
    const count = ref(0)
</script>