<template>
    <div>
        <img :src="focused?selectedImage:normalIamge" alt="" class="imagestyle">
    </div>
</template>
<script>
export default {
    props:{
        focused:false,
        selectedImage:{default:""},
        normalIamge:{default:""}
    }
}
</script>
<style scoped>
    .imagestyle{width:30px;height: 30px; }
</style>


