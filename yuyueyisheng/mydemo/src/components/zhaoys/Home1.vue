<template>
    <div >
        <Home1
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :s="require('../../assets/tupian/u30.png')"
            :d="require('../../assets/tupian/u2996.png')"
        ></Home1>
    </div>
</template>
<script>
import Home1 from "../zys/shousk.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        "Home1":Home1
    }
}
</script>
<style scoped>

</style>