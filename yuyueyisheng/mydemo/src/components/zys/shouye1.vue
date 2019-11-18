<template>
    <div>
        <div class="c1">
            <img :src="q" alt="" class="c2">
            <img :src="w" alt="" class="c3">
            <div class="c4">
                <span class="c5">找医生</span>
                <img :src="e" alt="" class="c6">
                <div class="c7">
                    <img :src="a" alt="">
                    <span>2</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        q:{default:""},
        w:{default:""},
        e:{default:""},
        a:{default:""}
    }
}
</script>
<style scoped>
    .c1{
        width:360px;
        height:88px;
        position:fixed;
        top:0px;
        border-bottom:1px solid rgba(240,240,240,0.5);
        background-color:#fff;
        z-index:2;
    }
    .c2{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 365px;
        height: 44px;
    }
    .c3{
        border-width: 0px;
        position: absolute;
        left: 50%;
        top: -1px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
    .c4{
        width:100%;
        height:30px;
        position:absolute;
        top:30px;
        left:0px;
    }
    .c4>.c6{
        position:absolute;
        top:20px;
        right:40px;
    }
    .c4>.c5{
        position:absolute;
        top:20px;
        left:30px;
        font-size:24px;
        font-weight:700;
        color:rgb(51,51,51);
    }
    .c4 .c7{
        width:16px;
        height:16px;
        border-radius:50%;
        display:flex;
        position:absolute;
        top:14px;
        right:33px;
    }
    .c4 .c7>span{
        position:absolute;
        left:5px;
        top:2px;
        font-size: 10px;
        color: #FFFFFF;
    }
</style>
</style>