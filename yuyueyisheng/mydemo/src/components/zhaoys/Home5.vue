<template>
    <div >
        <Home5
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :s="require('../../assets/tupian/u30.png')"
            :e="require('../../assets/tupian/u202.png')"
            :f="require('../../assets/tupian/25_u224.png')"
            :g="require('../../assets/tupian/u63.png')"
            :h="require('../../assets/tupian/u1745.png')"
            :u="require('../../assets/tupian/u1550.png')"
        ></Home5>
    </div>
</template>
<script>
import Home5 from "../zys/yiyuan.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        "Home5":Home5
    }
}
</script>
<style scoped>

</style>