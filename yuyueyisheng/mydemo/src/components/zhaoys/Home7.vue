<template>
    <div >
        <Home7
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :e="require('../../assets/tupian/u1593.png')"
            :r="require('../../assets/tupian/1_u4265.png')"
            :t="require('../../assets/tupian/add_u3352.png')"
        ></Home7>
    </div>
</template>
<script>
import Home7 from "../zys/xuanzhz.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        "Home7":Home7
    }
}
</script>
<style scoped>

</style>