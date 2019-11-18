<template >
    <div >    
        <div >
            <!--头-->
            <TitileBar
            :q="require('../../assets/tupian/微信图片_20191016191220.png')"
            :w="require('../../assets/tupian/微信图片_20191016191201.png')"
            :e="require('../../assets/tupian/u4937.png')"
            :a="require('../../assets/tupian/u19.png')"
            ></TitileBar>
            <!--中-->
            <Message
            :s="require('../../assets/tupian/u30.png')"
            :d="require('../../assets/tupian/u148.png')"
            :z="require('../../assets/tupian/u147.png')"
            :x="require('../../assets/tupian/肺部.png')"
            :c="require('../../assets/tupian/u63.png')"
            :r="require('../../assets/tupian/u1550.png')"
            :f="require('../../assets/tupian/u1745.png')"
            :v="require('../../assets/tupian/25_u224.png')"
            ></Message>
        </div>
    </div>
</template>
<script>
import TitileBar from "../zys/shouye1.vue"
import Message from "../zys/shouye2.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        "TitileBar":TitileBar,
        "Message":Message
    }
}
</script>
<style scoped>

    
</style>