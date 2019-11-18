<template>
    <div >
        <Home11
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :e="require('../../assets/tupian/u1593.png')"
            :a="require('../../assets/tupian/u63.png')"
            :s="require('../../assets/tupian/u1824.png')"
        ></Home11>
    </div>
</template>
<script>
import Home11 from "../zys/dingdxq.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        "Home11":Home11
    }
}
</script>
<style scoped>

</style>