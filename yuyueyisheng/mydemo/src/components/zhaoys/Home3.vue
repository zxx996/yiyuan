<template>
    <div >
        <Home3
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :e="require('../../assets/tupian/u1593.png')"
            :r="require('../../assets/tupian/u30.png')"
            :f="require('../../assets/tupian/u4470.png')"
            :v="require('../../assets/tupian/u4477.png')"
            :g="require('../../assets/tupian/done_u4527.png')"
            :h="require('../../assets/tupian/u63.png')"
            :n="require('../../assets/tupian/u1745.png')"
            :u="require('../../assets/tupian/u1550.png')"
        ></Home3>
    </div>
</template>
<script>
import Home3 from "../zys/neik.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        "Home3":Home3
    }
}
</script>
<style scoped>

</style>