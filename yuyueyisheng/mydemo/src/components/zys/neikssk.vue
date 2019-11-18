<template>
    <div>
        <div class="f1">
            <img :src="q" alt="" class="f2">
            <img :src="w" alt="" class="f3">
        </div>
        <div class="f5">
            <div class="f4">
                <img :src="s" alt="">
                <input type="text" placeholder="搜索医院、医生、疾病、知识">
            </div>
            <div>
                <span @click="asd">取消</span>
            </div>
        </div>
        <div class="f6" v-if="ter">
            <div class="f7">
                <span>历史记录</span>
                <img :src="d" alt="" @click="qwe">
            </div>
            <div class="f8">
                <span>高血压</span>
                <span>高血压</span>
                <span>高血压</span>
                <span>高血压</span>
            </div>
            <div class="f9">
                <span>人民医院</span>
                <span>人民医院</span>
                <span>高血压</span>
            </div>
        </div>
        <div class="f10">
            <div class="f11">
                <span>热门搜索</span>
            </div>
            <div class="f12">
                <span>肥胖症</span>
                <span>肥胖症</span>
                <span>肥胖症</span>
                <span>肥胖症</span>
            </div>
            <div class="f12">
                <span>肥胖症</span>
                <span>肥胖症</span>
                <span>肥胖症</span>
                <span>肥胖症</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ter:true
        }
    },
    props:{
        d:{default:""},
        q:{default:""},
        w:{default:""},
        s:{default:""},
    },
    methods:{
        qwe(){
            this.ter=!this.ter
        },
        asd(){
            this.$router.push("Home3")
        }
    }
}
</script>
<style scoped>
    .f1{
        width:360px;
        height:44px;
        position:fixed;
        top:0px;
        background-color:#fff;
        z-index:2;
    }
    .f2{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 365px;
        height: 44px;
    }
    .f3{
        border-width: 0px;
        position: absolute;
        left: 50%;
        top: -1px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
    .f4{
        width:280px;
        height:40px;
        margin-top:59px;
        margin-left:17px;
        background: inherit;
        background-color: rgba(242, 242, 242, 0);
        box-sizing: border-box;
        border:1px solid rgba(230, 230, 230, 1);
        border-radius: 40px;
        box-shadow: none;
        display:flex;
        align-items:center;

    }
    .f4>img{
        width:20px;
        height:20px;
        cursor:pointer;
        margin:0px 10px 0px 25px;
    }
    .f4>input{
        width:228px;
        height:25px;
        cursor:pointer;
        padding:0px 10px;
        font-weight:200;
        border:0;
        outline:none;
    }
    .f5>div:last-child{
        position:absolute;
        top:68px;
        left:316px;
        color:#999;
    }
    .f6,.f10{
        width:325px;
        margin:20px auto 0px;

    }
    .f6>div,.f10>div{
        margin-bottom:20px;
    }
    .f6>.f7{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';
        font-weight: 700;
        font-size:15px;
        color: #333333;
    }
    .f6>.f8{
        display:flex;
        justify-content:space-around;
        font-size:13px;
        color:#999;
    }
    .f6>.f9{
        display:flex;
        justify-content:space-around;
        font-size:13px;
        color:#999;
    }
    .f10>.f11{
        text-align:left;
        font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';
        font-weight: 700;
        font-size:15px;
        color: #333333;
    }
    .f10>.f12{
        display:flex;
        justify-content:space-around;
        font-size:13px;
        color:#999;
    }
</style>