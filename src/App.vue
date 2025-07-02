<template>
  <h1>{{ msg }}</h1>


  <test></test> <!--Global Import Component-->


  <AddContact @submit-form="addContactInfo($event)" />

  <div class="row">
    <div class="col-md-3" v-for="item in sortedContacts" :key="item.name">
      <Contact
        :name="item.name" 
        :phone="item.phone" 
        :email="item.email"
        :isFavorite="item.isFavorite"
        :note="contactNote"
        :bgColor="item.bgColor"
        @update-favorite="updateFavorite($event, item)" />
    </div>
  </div>

  <!-- how can we pass v-model val to child components -->
  <div class="row">
    <div class="col-md-4 py-3">
      <label for="">Contact Note: </label>
      <input type="text" class="form-control" v-model="contactNote">
    </div>
  </div>

  <ButtonCounter></ButtonCounter>
</template>


<script setup>
  import { ref, reactive, computed } from "vue"
  import AddContact from "./components/AddContact.vue";
  import Contact from "./components/ContactItem.vue";
  import ButtonCounter from './components/ButtonCounter.vue';

  const msg = "Hello Vue"
  

  // contact infos
  const contactInfos = reactive([
    {
      name: "RABIUL HASSAN",
      email: "support@r.com",
      phone: 289579273,
      isFavorite: true,
      bgColor: "bg-primary"
    },
    {
      name: "ASHIKUL ISALM",
      email: "support@a.com",
      phone: 324524323,
      isFavorite: false,
      bgColor: "bg-danger"
    },
    {
      name: "NAZIM AHMED",
      email: "support@n.com",
      phone: 34534646,
      isFavorite: true,
      bgColor: "bg-success"
    }
  ])

  // sort data by desc format
  const sortedContacts = computed(() => {
    return [...contactInfos].reverse()
  })
  
  const contactNote = ref('this contact is created by Admin')


  // add contact 
  function addContactInfo(contactInfo) {
    contactInfos.push(contactInfo)
  }


  function updateFavorite(isFavorite, item){
    item.isFavorite = !isFavorite
  }
  
</script>
