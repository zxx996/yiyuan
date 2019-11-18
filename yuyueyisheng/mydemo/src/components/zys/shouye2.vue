<template>
    <div >
        <div class="b1">
            <img :src="s" alt="">
            <input type="text" class="b2" placeholder="搜索医院、医生、疾病、知识"  @click="zxc">
        </div>
        <div class="b3">
            <div class="b4">
                <img :src="d" alt="">
                <img :src="z" alt="">
            </div>
            <div class="b5" @click="qaz">
                <p><span>快速问医  无需等待</span></p>
                <p><span>2w+名医在线问诊</span></p>
            </div>
            <div class="b6">
                <span>去咨询</span>
            </div>
        </div>
        <div class="b7">全部科室</div>
        <div class="b8">
            <div @click="wsx" v-for="(elem,i) of num" :key="i">
                <img :src="x" alt="">
                <p>{{elem}}</p>
            </div>
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
            num:["内科","外科","儿科","传染病科","妇产科","男科","精神科","皮肤科病","中医科"],
            qwe:[
                {qname:"张北清",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.c},
                {qname:"韩梅梅",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.f},
                {qname:"张北清",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.c},
                ]
        }
    },
    props:{
        s:{default:""},
        d:{default:""},
        z:{default:""},
        x:{default:""},
        c:{default:""},
        r:{default:""},
        f:{default:""},
        v:{default:""}
    },
    methods:{
        zxc(){
            setTimeout(()=>{
                this.$router.push("Home1")
            },200)
            
        },
        qaz(){
            this.$router.push("Home2")
        },
        wsx(){
            this.$router.push("Home3")
        }
    }
}
</script>
<style scoped>
    .b1{
        width:325px;
        height:40px;
        margin:105px auto 0px;
        background: inherit;
        background-color: rgba(242, 242, 242, 0);
        box-sizing: border-box;
        border:1px solid rgba(230, 230, 230, 1);
        border-radius: 40px;
        box-shadow: none;
        display:flex;
        align-items:center;

    }
    .b1>img{
        width:20px;
        height:20px;
        cursor:pointer;
        margin:0px 10px 0px 30px;
    }
    .b1>input{
        width:228px;
        height:25px;
        cursor:pointer;
        padding:0px 10px;
        font-weight:200;
        border:0;
        outline:none;
    }
    .b3{
        width:325px;
        height:80px;
        margin:10px auto 0px;
        background: inherit;
        background-color: rgba(0, 200, 170,0.08);
        box-sizing: border-box;
        box-shadow: none;
        display:flex;
        align-items:center;
        justify-content:space-around;
        align-items:center;
    }
    .b4{
        position:relative;
    }
    .b4>img:first-child{
        width:20px;
        height:20px;
        position:absolute;
        left:15px;top:15px;
    }
    .b5>p{
        margin:8px 0px;
    }
    
    .b5 p:first-child{
        font-family: "思源黑体 Bold", 思源黑体;
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
        color: rgb(0, 200, 170);
    }
    .b5 p:last-child{
        font-size: 12px;
        color: rgb(0, 200, 170);
        text-align:left;
    }
    .b6{
        width:67px;
        height:24px;
        box-shadow: none;
        font-size: 12px;
        background: orange;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        border-radius: 30px;
        color:#fff;
        position:relative;
    }
    .b6>span{
        position:absolute;
        top:3px;
        left:14px;
    }
    .b7{
        width:325px;
        margin:20px auto 20px;
        text-align:left;
        font-weight: 700;
        font-size: 20px;
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
        margin:0px auto;
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
        margin:20px auto;
        display:flex;
        align-items:center;
        text-align:center;
        justify-content:space-between;
    }
    
</style>