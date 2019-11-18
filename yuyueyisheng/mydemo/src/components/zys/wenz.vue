<template>
    <div>
        <div class="v1">
            <img :src="q" alt="" class="v2">
            <img :src="w" alt="" class="v3">
        </div>
        <div class="v4">
            <div class="v5" @click="asd">
                <img :src="e" alt="">
                <span>极速问诊</span>
            </div>
            <div class="v6">
                <img :src="a" alt="">
                <p>
                    <span>20s</span>
                    <span> 快速匹配专业医生</span>
                </p>
            </div>
            <div class="v7" v-for="(elem,i) of uio" :key="i">
                <div class="v8" >
                    <img :src="elem.img" alt="">
                </div>
                <div class="v9" @click="hjk">
                    <div>{{elem.qname}}</div>
                    <div>{{elem.wname}}</div>
                </div>
                <div class="v10">
                    <img :src="z" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uio:[
                {img:this.s,qname:"三甲图文问诊",wname:"三甲主治及以上级别医生"},
                {img:this.d,qname:"普通图文问诊",wname:"二甲主治及以上级别医生"}
                ]
        }
    },
    props:{
        a:{default:""},
        q:{default:""},
        w:{default:""},
        e:{default:""},
        s:{default:""},
        d:{default:""},
        z:{default:""}
    },
    methods:{
        hjk(){
            this.$router.push("Home6")
        },
        asd(){
            window.history.go(-1)
        }
    }
}
</script>
<style scoped>
    .v1{
        width:360px;
        height:44px;
        position:fixed;
        top:0px;
        background-color:#fff;
        z-index:2;
    }
     .v2{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 365px;
        height: 44px;
    }
    .v3{
        border-width: 0px;
        position: absolute;
        left: 50%;
        top: -1px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
    .v4{
        width:325px;
        margin:56px auto 0px;
       
    }
    .v4>.v5{
        display:flex;
        align-items:center;
    }
    .v5>span{
        margin-left:10px;
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
        color:#333;
    }
    .v5>img{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px
    }
    .v6{
        margin-top:18px;
    }
    .v6>p>span:first-child{
        color:#6C63FF;
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
    }
    .v6>p>span:last-child{
        color: #666;  
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
    }
    .v7{
        display:flex;
        margin-top:30px;
    }
    .v8{
        width:50px;
        height:50px;
        line-height:65px;
        margin-left:20px;
    }
    .v9{
        text-align:left;
        margin-left:20px;
        line-height:25px;
    }
    .v9>div:first-child{
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 16px;
    }
    .v9>div:last-child{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        color: #999999;
    }
    .v10{
        width:50px;
        height:50px;
        line-height:50px;
        margin-left:50px;
    }
</style>