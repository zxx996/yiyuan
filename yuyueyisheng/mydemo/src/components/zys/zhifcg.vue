<template>
    <div class="q2">
        <div class="k1">
            <img :src="q" alt="" class="k2">
            <img :src="w" alt="" class="k3">
        </div>
        <div class="k4">
            <div class="k5" @click="op" >
                <img :src="e" alt="">
                <span>支付成功</span>
            </div>
            <span @click="wc">完成</span>
        </div>
        <div class="k6">
            <div class="k7">
                <div><img :src="z" alt=""><span>1</span></div>
                <div><img :src="z" alt=""><span>2</span></div>
                <div><img :src="z" alt=""><span>3</span></div>
                <img :src="x" alt="">
            </div>
            <div class="k8">
                <div><p><span style="font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';font-weight: 700;font-style: normal;color: #00C8AA;font-size:14px;">订单支付成功</span></p></div>
                <div>
                    <p><span style="font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';font-weight: 700;font-style: normal;color: #00C8AA;font-size:14px;">等待医生接诊</span></p>
                    <p><span style="font-weight: 400;font-style: normal;font-size: 12px;color: #CCCCCC;">已为您通知医生接诊，请耐心等待</span></p>
                </div>
                <div>
                    <p><span style="font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';font-weight: 700;font-style: normal;font-size:14px;">医生接诊</span></p>
                    <p><span style="font-weight: 400;font-style: normal;font-size: 12px;color: #CCCCCC;">如果医生24小时内未回复，将全额退款</span></p>
                </div>
            </div>
        </div>
        <div class="k9" @click="po">
            <span>查看订单</span>
        </div>
        <div class="b9">
            <span>名医推荐</span>
            <span>获取更多诊疗建议</span>
        </div>
        <div class="b10" v-for="(ele,j) of qwe" :key="j">
            <img :src="ele.imgs" alt="">
            <ul>
                <li>
                    <span>{{ele.qname}}</span>
                    <span>{{ele.wname}}</span>
                </li>
                <li>
                    <span>{{ele.ename}}</span>
                </li>
                <li>
                    <span>{{ele.fname}}</span>
                </li>
                <li>
                    <span>好评率：</span>
                    <span class="b11">99.2%</span>
                    <span>咨询量：</span>
                    <span class="b11">236966</span>
                </li>
                <li>
                    <span class="b11">￥49</span>
                    <div>
                        <img :src="r" alt="">
                        <span class="b11">问医生&nbsp;&nbsp;</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="b12">
            <img :src="v" alt="">
            <span>数据正在加载中</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            qwe:[
                {qname:"张北清",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.c},
                {qname:"韩梅梅",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.f},
                {qname:"张北清",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.c},
                ]
        }
    },
    props:{
        q:{default:""},
        w:{default:""},
        e:{default:""},
        z:{default:""},
        x:{default:""},
        c:{default:""},
        r:{default:""},
        f:{default:""},
        v:{default:""},
    },
    methods:{
        po(){
             var yid=this.$route.query.yid;
             var ddid=this.$route.query.ddid;
            // console.log(yid,ddid)
            this.$router.push({name:"Home11",query:{yid:yid,ddid:ddid}})
        },
        op(){
            window.history.go(-1)
        },
        wc(){
            this.$router.push("index")
        }
    }
}
</script>
<style scoped>
    .k1{
        width:360px;
        height:44px;
        position:fixed;
        top:0px;
        background-color:#fff;
        z-index:10;
    }
    .k2{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 365px;
        height: 44px;
    }
    .k3{
        border-width: 0px;
        position: absolute;
        left: 50%;
        top: -1px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
   .k4{
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
    .k4>span{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color:#333;
        margin-top:56px;
    }
    .k4>.k5{
        display:flex;
        align-items:center;
        margin-top:50px;
    }
    .k5>span{
        margin-left:10px;
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
        color:#333;
    }
    .k5>img{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px
    }
    .k6{
        width:325px;
        margin:80px auto 0px;
        display:flex;
        justify-content:space-between;
        position:relative;
    }
    .k7>img{
        position:absolute;
        top:40px;
        left:33px;
    }
    .k7>div{
        margin-top:30px;
        margin-left:20px;
        color:#fff;
    }
    .k7>div>span{
       position:absolute;
    }
    .k7>div:first-child>span{
        top:36px;
       left:29px;
    }
    .k7>div:nth-child(2)>span{
        top:97px;
       left:29px;
    }
    .k7>div:nth-child(3)>span{
        top:159px;
       left:29px;
    }
    .k8>div{
        text-align:left;
        margin-top:33px;
    }
    .k8>div>p{
        margin:0px;
    }
    .k8{
        width:260px;
    }
    .k9{
        width:159px;
        height:40px;
        margin:40px auto 0px;
        background-color:rgba(0, 200, 170, 1);
        color: #fff;
        border-radius:4px;
        line-height:40px;
        text-align:center;
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
    }
    .b8{
       width:325px;
       margin:0px auto; 
       display:flex;
       flex-wrap:wrap;
       justify-content:space-between;
    }
    .b8>div{
        width:98px;
        height:98px;

    }
    .b8>div>img{
        width:30px;
        height:30px;
        margin:20px 0px 0px;
    }
    .b8>div>p{
        margin:0px;
    }
    .b9{
        text-align:left;
        width:325px;
        margin:30px auto 0px;
    }
    .b9>span:first-child{
        font-family: "思源黑体 Bold", 思源黑体;
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
    }
    .b9>span:last-child{
        font-size: 12px;
        color: rgb(204, 204, 204);
    }
    .b10{
        width:325px; 
        display:flex;
        margin:10px auto 0px;
    }
    .b10>img{
        width:40px;
        height:40px;
    }
    .b10>ul{
        text-align:left;
        width:280px;
        list-style:none;
        margin:0 0 0 5px;
        padding:0px;
    }
    .b10>ul>li:first-child{
        font-size:14px;
    }
    .b10>ul>li:first-child>span:first-child{
        color: rgb(51, 51, 51);
        font-weight:700;
    }
    .b10>ul>li+li{
        font-size:12px;
        color: rgb(102, 102, 102);
        margin-top:10px;
    }
    .b10>ul>li:last-child{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .b10>ul>li:last-child>div{
        width:70px;
        height:28px;
        border:1px solid rgb(0, 200, 170);
        border-radius:44px;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .b11{
        color:rgb(0, 200, 170);
    }
    .b12>span{
        font-size: 12px;
        color: #CCCCCC;
    }
    .b12{
        width:110px;
        margin:20px auto 70px;
        display:flex;
        align-items:center;
        text-align:center;
        justify-content:space-between;
    }
</style>