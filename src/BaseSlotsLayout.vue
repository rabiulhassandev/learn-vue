<template>
    <div>
        <MySlot>
            <template v-slot:header>
                <h3>Header Area</h3>
            </template>
            <template v-slot:default>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam repellat reiciendis natus non! Saepe, harum nam maxime repudiandae nisi quam provident consequuntur accusantium velit aliquid rem? Magnam, fugiat voluptatem illo eum nihil numquam modi! Adipisci perferendis animi, voluptate perspiciatis sapiente nobis illum ipsum! Consequatur incidunt, deleniti cumque eius dolores dolor aut veritatis, recusandae maiores amet, officiis consequuntur. Iusto, provident error impedit id ipsa facilis, voluptatum dicta soluta molestiae earum nesciunt voluptas harum perferendis deleniti rem at ut, nulla explicabo voluptatem libero perspiciatis sed nisi? Rerum libero ad quisquam saepe nulla. Ab, quae odio voluptates pariatur placeat reprehenderit earum illum obcaecati.
                </p>
            </template>
            <template v-slot:footer>
                <h6>Footer Area</h6>
            </template>
        </MySlot>
    </div>
</template>


<script setup>
    import MySlot from './components/MySlot.vue';
</script>