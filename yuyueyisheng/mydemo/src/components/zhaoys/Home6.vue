<template>
    <div >
        <Home6
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :s="require('../../assets/tupian/u30.png')"
            :e="require('../../assets/tupian/u1593.png')"
            :f="require('../../assets/tupian/u3287.png')"
        ></Home6>
    </div>
</template>
<script>
import Home6 from "../zys/miaosbq.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        "Home6":Home6
    }
}
</script>
<style scoped>

</style>