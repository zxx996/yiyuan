<template>
    <div>
        <div class="m1">
            <img :src="q" alt="" class="m2">
            <img :src="w" alt="" class="m3">
        </div>
        <div class="m4">
            <div class="m5" @click="fanhui">
                <img :src="e" alt="" >
                <span>预约订单</span>
            </div>
        </div>
        <ul class="k1" v-if="num1==1">
            <li  v-for="(elem,i) of num" :key="i" >
                <p><span>预约情况：</span><span style="color:rgba(0, 200, 170, 1)">已预约</span></p>
                <p><span>病情内容：</span><span style="font-size:12px;color:#999">{{elem.bingqin}}</span></p>
                <div class="k3">
                    <div class="k2">
                        <img :src="a" alt="">
                        <span>张清北</span>
                        <span>{{elem.time}}</span>
                    </div>
                    <div class="k4">
                        <span>{{elem.uname}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:[""],
            num1:0
        }
    },
    props:{
        q:{default:""},
        w:{default:""},
        e:{default:""},
        a:{default:""},
    },
    methods:{
        fanhui(){
            this.$router.go(-1);
        }
    },
    created:function(){
        this.axios.get("sebinqing2")
        .then(res=>{
            if(res.data.code==1){
                this.num=res.data.data;
                this.num1=1;
            }else{
                this.$messagebox.confirm("未登录，请登陆")
                .then(res=>{
                    this.num1=0;
                    this.$router.push("login")
                })
                .catch(err=>{console.log(err)})
            }
            
            
        })
        .catch(err=>{console.log(err)})
    }
}
</script>
<style scoped>
    .m1{
        width:360px;
        height:44px;
        position:fixed;
        top:0px;
        background-color:#fff;
        z-index:10;
    }
    .m2{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 365px;
        height: 44px;
    }
    .m3{
        border-width: 0px;
        position: absolute;
        left: 50%;
        top: -5px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
   .m4{
        width:100%;
        height:80px;
        margin:0px auto 0px;
        padding:0px 25px;
        display:flex;
        justify-content:space-between;
        position:fixed;
        top:0px;
        box-sizing:border-box;
        background-color:#fff;
        z-index:2;
    }
    .m4>span{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color:#333;
        margin-top:56px;
    }
    .m4>.m5{
        display:flex;
        align-items:center;
        margin-top:50px;
    }
    .m5>span{
        margin-left:10px;
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
        color:#333;
    }
    .m5>img{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px
    }
    .k1{
        margin-top:100px;
        text-align:left;
        color:#333;
        font-size:14px;
        padding:0px;
    }
    .k1>li{
        width:305px;
        margin:10px auto;
        list-style:none;
        height:100px;
        box-shadow:-5px 8px rgba(0,0,0,0.03);
        border-radius:4px;
        padding:10px;
    }
    .k1>li>p:nth-child(2){
        margin:10px 0px;
    }
    .k1 p{
        margin:0px;
    }
    .k1 img{
        width:24px;
        height:24px;
    }
    .k2>span{
        font-size: 12px;
        color: #CCCCCC;  
        margin-left:10px;   
    }
    .k2{
        display:flex;
        align-items:center;
    }
    .k2>span:last-child{
        margin-top:3px;
    }
    .k3{
        height:24px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
</style>