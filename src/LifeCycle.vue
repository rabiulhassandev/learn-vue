<template>
    <div class="row">
        <div class="col-md-12">
            <h1>{{ message }}</h1>
            <button class="btn btn-primary" @click="showMessage">Show message</button>
            
            <hr>
            <h1>{{ count }}</h1>
            <button class="btn btn-info" @click="++count">Increment Count</button>

            <hr>

            <p>Show button from child component if (`count` === 1)</p>
            <LifeCycleButtonCounter v-if="count === 1"></LifeCycleButtonCounter>
        </div>
    </div>
</template>


<script setup>
    import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
    import LifeCycleButtonCounter from './components/LifeCycleButtonCounter.vue'


    const message = ref('Hello, Vue 3!')
    const showMessage = () => {
        message.value = 'Hello, Vue 3! Updated!'
    }
    const count = ref(0)


    onBeforeMount(() => {
        console.log('onBeforeMount: LifeCycle.vue')
    })

    onMounted(() => {
        console.log('onMounted: LifeCycle.vue')
    })

    onBeforeUpdate(() => {
        console.log('onBeforeUpdate: LifeCycle.vue')
    })

    onUpdated(() => {
        console.log('onUpdated: LifeCycle.vue')
    })

    onBeforeUnmount(() => {
        console.log('onBeforeUnmount: LifeCycle.vue')
    })

    onUnmounted(() => {
        console.log('onUnmounted: LifeCycle.vue')
    })

</script>