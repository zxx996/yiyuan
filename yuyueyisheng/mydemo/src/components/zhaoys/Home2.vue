<template>
    <div >
        <Home2
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :e="require('../../assets/tupian/u1593.png')"
            :a="require('../../assets/tupian/微信图片_20191019141354.png')"
            :s="require('../../assets/tupian/u1938.png')"
            :d="require('../../assets/tupian/u4126.png')"
            :z="require('../../assets/tupian/u1941.png')"
        ></Home2>
    </div>
</template>
<script>
import Home2 from "../zys/wenz.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        "Home2":Home2
    }
}
</script>
<style scoped>

</style>