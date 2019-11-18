<template>
    <div >
        <Home12
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :e="require('../../assets/tupian/u1593.png')"
            :a="require('../../assets/tupian/u63.png')"
        ></Home12>
    </div>
</template>
<script>
import Home12 from "../zys/yuydd.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        "Home12":Home12
    }
}
</script>
<style scoped>

</style>