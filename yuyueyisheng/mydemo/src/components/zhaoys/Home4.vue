<template>
    <div >
        <Home4
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :s="require('../../assets/tupian/u30.png')"
            :d="require('../../assets/tupian/u2996.png')"
        ></Home4>
    </div>
</template>
<script>
import Home4 from "../zys/neikssk.vue"
export default {
    data(){
        return{
            
        }
    },
    components:{
        "Home4":Home4
    }
}
</script>
<style scoped>

</style>