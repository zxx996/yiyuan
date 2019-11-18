<template>
    <div >
        <Home8
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :e="require('../../assets/tupian/u1593.png')"
            :r="require('../../assets/tupian/1_u4265.png')"
            :t="require('../../assets/tupian/u1824.png')"
        ></Home8>
    </div>
</template>
<script>
import Home8 from "../zys/tianjhz.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        "Home8":Home8
    }
}
</script>
<style scoped>

</style>