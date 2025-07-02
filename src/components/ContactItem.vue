<template>
    <div class="card border-0 mb-2" :class="bgColor">
        <div class="card-body">
            <h5 class="m-0">Name: {{ name }}</h5>
            <p class="m-0">Email: {{ email }} </p> 
            <p class="mb-2">Phone: {{ phone }}</p>
            <button class="btn btn-sm shadow" :class="isFavorite ? 'btn-success' : 'btn-danger'" @click="toggleFavorite" style="border: 1px solid;">{{ isFavorite ? 'Remove Favorite' : 'Add Favorite' }}</button>
            <br>
            <div class="text-end text-small text-white">
                <small><i>Note: {{ note }}</i></small>
            </div>
        </div>
    </div>
</template>


<script setup>

    import { ref } from 'vue'
    
    const props = defineProps({
        name: {type: String, required: true},
        phone: {type: Number},
        email: {type: String, required: false, default: "default@e.com"},
        isFavorite: { type: Boolean, default: false },
        note: { type: String, default: 'note here' },
        bgColor: { type: String, default: 'bg-info' }
    })


    const emit = defineEmits(["update-favorite"])


    function toggleFavorite() {
        emit("update-favorite", props.isFavorite)
    }

</script>
