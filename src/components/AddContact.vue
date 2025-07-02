<template>
    <div class="card mb-3 border-0 bg-info">
        <div class="card-header">
            <div class="title">
                <h4 class="text-dark mb-0 text-white">Add Contact</h4>
            </div>
        </div>
        <div class="card-body">
            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="col-12">
                        <div class="alert alert-warning" v-if="errorMsg.length > 0">
                            <ul class="mb-0 d-flex gap-5">
                                <li v-for="(error, index) in errorMsg" :key="index">
                                    {{ error }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-2">
                        <input type="text" class="form-control" placeholder="Enter Name" v-model.trim="contact.name" />
                    </div>
                    <div class="col-md-3 mb-2">
                        <input type="email" class="form-control" placeholder="Enter Email"
                            v-model.trim="contact.email" />
                    </div>
                    <div class="col-md-3 mb-2">
                        <input type="number" class="form-control" placeholder="Enter Phone"
                            v-model.number="contact.phone" />
                    </div>
                    <div class="col-md-3 mb-2">
                        <button class="btn btn-secondary w-100">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const errorMsg = ref([]);

const contact = ref({
    name: "",
    email: "",
    phone: "",
});

const emit = defineEmits(["submit-form"]);

// Simple email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Submit form
function submitForm() {
    errorMsg.value = [];

    if (!contact.value.name) {
        errorMsg.value.push("Name is required.");
    }

    if (!contact.value.email) {
        errorMsg.value.push("Email is required.");
    } else if (!emailRegex.test(contact.value.email)) {
        errorMsg.value.push("Invalid email format.");
    }

    if (!contact.value.phone) {
        errorMsg.value.push("Phone number is required.");
    } else if (!/^\d+$/.test(contact.value.phone.toString())) {
        errorMsg.value.push("Phone must be a number.");
    }

    // If no errors, emit the form data
    if (errorMsg.value.length === 0) {
        emit("submit-form", { ...contact.value });

        contact.value = {
            name: "",
            email: "",
            phone: "",
        };
    }
}
</script>
