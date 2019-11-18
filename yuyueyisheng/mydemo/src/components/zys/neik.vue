<template>
    <div>
        
        <div class="t1">
            <img :src="q" alt="" class="t2">
            <img :src="w" alt="" class="t3">
        </div>
        <div class="t4">
            <div class="t5" @click="asd">
                <img :src="e" alt="">
                <span>内科</span>
            </div>
            <div class="t6">
                <img :src="r" alt="">
                <input @click="yh" type="text" placeholder="搜索医院、医生、疾病、知识">
            </div>
            <div class="t7">  
                <ul>
                    <li>
                        <span>北京</span>
                        <img :src="f" alt="">
                    </li>
                    <li>
                        <span>儿科</span>
                        <img :src="f" alt="">
                    </li>
                    <li @click="zxc">
                        <span>综合排行</span>
                        <img :src="num==true?f:v" alt="">
                    </li>
                    <li @click="qaz">
                        <span>筛选</span>
                        <img :src="num1==true?f:v" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="t8">
                <ul>
                    <li>
                        <span @click="wsx" class="t9">综合排序</span>
                        <img v-if="num2==1" :src="g" alt="">
                    </li>
                    <li>
                        <span @click="edc">评分</span>
                        <img v-if="num2==2" :src="g" alt="">
                    </li>
                    <li>
                        <span @click="rfv">咨询量</span>
                        <img v-if="num2==3" :src="g" alt="">
                    </li>
                    <li>
                        <span @click="tgb">价格</span>
                        <img  v-if="num2==4" :src="g" alt="">
                    </li>
                </ul>
                <div class="t9">
                    <div @click="zxc"><span>取消</span></div>
                    <div @click="zxc"><span>确认</span></div>
                </div>
                <div></div>
        </div>
        <div class="t10">
            <div class="t11">
                <span>医院等级</span>
                <div class="t12" @click="qw"><span>三级甲等</span></div>
                <span>医生职称</span>
                <div class="t13" @click="as">
                    <div ><span>主任医师</span></div>
                    <div ><span>副主任医师</span></div>
                    <div><span>主治医师</span></div>
                    <div ><span>医师</span></div>
                </div>
                <span>价格区间</span>
                <div class="t14" @click="zx">
                    <div><span>0-19</span></div>
                    <div><span>20-49</span></div>
                    <div><span>20-79</span></div>
                    <div><span>80以上</span></div>
                </div>
            </div>
            <div class="t9">
                <div @click="er"><span>重置</span></div>
                <div @click="qaz"><span>确认</span></div>
            </div>
            <div class="t16"></div>
        </div>
        <div class="b10" v-for="(ele,j) of qwe1" :key="j">
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
                        <img :src="u" alt="">
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
            num:true,
            num1:true,
            num2:1,
            qwe1:[
                {qname:"张北清",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.h},
                {qname:"韩梅梅",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.n},
                {qname:"张北清",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.h},
                ]
        }
    },
    props:{
        q:{default:""},
        w:{default:""},
        e:{default:""},
        r:{default:""},
        f:{default:""},
        v:{default:""},
        g:{default:""},
        h:{default:""},
        n:{default:""},
        u:{default:""},
    },
    methods:{
        yh(){
            this.$router.push("Home4")
        },
        er(){
            var t12=document.querySelector(".t12>.t15");
                if(t12!=null){
                    t12.className="";
                }
            var t13=document.querySelector(".t13>div>.t15");
                if(t13!=null){
                    t13.className="";
                }
            var t14=document.querySelector(".t14>div>.t15");
                if(t14!=null){
                    t14.className="";
                }
        },
        zx(e){
            var ou=e.target;
            if(ou.nodeName=="SPAN"){
                var t10=document.querySelector(".t14>div>.t15");
                console.log(t10)
                if(t10!=null){
                    t10.className=""
                }
                ou.className="t15"
            }
        },
        as(e){
            var ou=e.target;
            if(ou.nodeName=="SPAN"){
                var t10=document.querySelector(".t13>div>.t15");
                console.log(t10)
                if(t10!=null){
                    t10.className=""
                }
                ou.className="t15"
            }
        },
        qw(){
            var t12=document.querySelector(".t12>span");
            t12.className ="t15";
        },
        asd(){
            window.history.go(-1)
        },
        yhn(){
            var t8=document.querySelector(".t8")
            if(this.num){
                t8.style.display="none";
            }else{
                t8.style.display="block";
            }
        },
        ewq(){
            var t10=document.querySelector(".t10")
            if(this.num1){
                t10.style.display="none";
            }else{
                t10.style.display="block";
            }
        },
        zxc(){
            this.num=!this.num;
            this.yhn();
        },
        qaz(){
            this.num1=!this.num1;
            this.ewq();
        },
        wsx(){
            this.num2=1;
            var span=document.querySelector(".t8 li:first-child>span")
            span.className="t9"
            var span1=document.querySelector(".t8 li:not(:first-child)>.t9")
            if(span1!=null){
                span1.className="";    
            }
        },
        edc(){
            this.num2=2;
            var span=document.querySelector(".t8 li:nth-child(2)>span")
            span.className="t9"
            var span1=document.querySelector(".t8 li:not(:nth-child(2))>.t9")
            if(span1!=null){
                span1.className="";     
            }
        },
        rfv(){
            this.num2=3;
            var span=document.querySelector(".t8 li:nth-child(3)>span")
            span.className="t9"
            var span1=document.querySelector(".t8 li:not(:nth-child(3))>.t9")
            if(span1!=null){
                span1.className="";      
            }
        },
        tgb(){
            this.num2=4; 
            var span=document.querySelector(".t8 li:last-child>span")
            span.className="t9"
            var span1=document.querySelector(".t8 li:not(:last-child)>.t9")
            if(span1!=null){
                span1.className="";
            }   
        }
    }
}
</script>
<style scoped>
    
    .t1{
        width:360px;
        height:44px;
        position:fixed;
        top:0px;
        background-color:#fff;
        z-index:2;
    }
     .t2{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 365px;
        height: 44px;
    }
    .t3{
        border-width: 0px;
        position: absolute;
        left: 50%;
        top: -1px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
    .t4{
        width:325px;
        margin:56px auto 0px;
       
    }
    .t4>.t5{
        display:flex;
        align-items:center;
        position:fixed;
        top:56px;
    }
    .t5>span{
        margin-left:10px;
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
        color:#333;
    }
    .t5>img{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px
    }
    .t6{
        width:325px;
        height:40px;
        margin-top:103px;
        background: inherit;
        background-color: rgba(242, 242, 242, 0);
        box-sizing: border-box;
        border:1px solid rgba(230, 230, 230, 1);
        border-radius: 40px;
        box-shadow: none;
        display:flex;
        align-items:center;

    }
    .t6>img{
        width:20px;
        height:20px;
        cursor:pointer;
        margin:0px 10px 0px 25px;
    }
    .t6>input{
        width:228px;
        height:25px;
        cursor:pointer;
        padding:0px 10px;
        font-weight:200;
        border:0;
        outline:none;
    }
    .t7>ul{
        list-style:none;
        display:flex;
        justify-content:space-between;
        padding:0;
    }
    .t7>ul>li>span{
        font-family: '思源黑体 Bold', '思源黑体 Regular', '思源黑体';
        font-weight: 700;
        font-size: 14px;
        margin-right:10px;
    }
    .t7>ul>li{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .t8>ul{
        list-style:none;
        padding:0px;
        background-color:#fff;
        width:325px;
        margin:0px auto;
    }
    .t8>ul>li{
        display:flex;
        justify-content:space-between;
        margin-top:20px;
    }
    .t8>ul>li>img{
        width:16px;
        height:13px;
    }
    .t8>ul>li>span{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
    }
    .t9{
        color: rgb(0, 200, 170);
    }
    .t8,.t10{
        display:none;
    }
    .t9{
        display:flex;
        justify-content:space-between;
        margin-top:15px;
    }
    .t9>div{
        width:50%;
        height:50px;
        line-height:50px;
        text-align:center;
    }
    .t9>div:first-child{
        color:rgba(0, 200, 170, 1);
        background-color: rgba(0, 204, 153, 0.1);
    }
    .t9>div:last-child{
        color:#fff;
        background-color:rgba(0, 200, 170, 1);
    }
    .t8>div:last-child{
        height:274px;
        background-color:rgba(0, 0, 0, 0.498039215686275);
    }
    .t11{
        width:325px;
        margin:0px auto;
        text-align:left;
        color: #333333;
    }
    .t11>span{
        font-size: 12px;
        color: #CCCCCC;
    }
    .t11>.t13,.t11>.t14{
        display:flex;
        justify-content:space-between;
    }
    .t11>div{
        margin:15px 0px;
        font-size: 12px;
    }
    .t11>.t12{
        width:80px;
        height:30px;
        background-color: rgba(242, 242, 242, 0.498039215686275);
        border-radius: 4px;
        line-height:30px;
        text-align:center;
    }
    .t11>.t13>div{
        background-color: rgba(242, 242, 242, 0.498039215686275);
        border-radius: 4px;
        line-height:30px;
        text-align:center;
    }
    .t11>.t13>div:first-child,.t11>.t13>div:nth-child(3){
        width:80px;
        height:30px;
    }
    .t11>.t13>div:nth-child(2){
        width:90px;
        height:30px;
    }
    .t11>.t13>div:nth-child(4){
        width:48px;
        height:30px;
    }
    .t11>.t14>div{
        width:72px;
        height:30px;
        background-color: rgba(242, 242, 242, 0.498039215686275);
        border-radius: 4px;
        line-height:30px;
        text-align:center;
    }
    .t15{
        color: rgb(0, 200, 170);
    }
    .t16{
        height:195px;
        background-color:rgba(0, 0, 0, 0.498039215686275);
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