<template>
    <div>
        <div class="y1">
            <img :src="q" alt="" class="y2">
            <img :src="w" alt="" class="y3">
        </div>
        <div class="y5">
            <div class="y4">
                <img :src="s" alt="">
                <input type="text" placeholder="搜索医院、医生、疾病、知识" value="人民">
            </div>
            <div>
                <span @click="qwer">取消</span>
            </div>
        </div>
        <div class="y6">
            <ul @click="qwe">
                <li><span @click="asd" class="y8">医院</span></li>
                <li><span @click="zxc">医生</span></li>
                <li><span @click="qaz">疾病</span></li>
                <li><span @click="wsx">知识</span></li>
            </ul>
        </div>
        <div class="y7">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="y9" v-for="(elem,i) of you" :key="i" v-if="num==1">
            <div class="y10">
                <img :src="elem.img" alt="">
            </div>
            <div class="y11">
                <div>
                    <span>中国</span><span style="color: #FE9900;">人民</span><span>解放军总医院</span>
                </div>
                <div>
                    <span style="color:#FF0000;">{{elem.uname}}</span>
                    <span style="color:#999999;">{{elem.qname}}</span>
                </div>
            </div>
            <div class="y12" >
                <div>
                    <span>&gt;1.2km</span>
                </div>
            </div>
        </div>
        <div class="y13" v-if="num==1">
            <img :src="f" alt="" >
            <span>数据正在加载中</span>
        </div>
        <div v-if="num==2">
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
            <img :src="f" alt="">
            <span>数据正在加载中</span>
        </div>
        </div>
        <div v-if="num==3" class="y15">
            <div>
                高<span style="color:#FE9900;">血</span>压
            </div>
            <div>
                低<span style="color:#FE9900;">血</span>压
            </div>
            <div>
                高<span style="color:#FE9900;">血</span>糖
            </div>
            <div class="y16">
                <span>已加载全部</span>
            </div>   
        </div>
        <div v-if="num==4" v-for="(w,t) of qwe2" :key="t">
            <div class="y17">
                <div>
                    <div>{{w.qname}}</div>
                    <div>别用养生折腾<span style="color:#FE9900;">孩子</span>了</div>
                    <div>{{w.sum}}次浏览   </div>
                </div>
                <div>
                    <img :src="w.wname" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            you:[
                {img:this.e,uname:"三级甲等",qname:"综合医院"},
                {img:this.e,uname:"三级甲等",qname:"综合医院"},
                {img:this.e,uname:"三级甲等",qname:"综合医院"},
                {img:this.e,uname:"三级甲等",qname:"综合医院"}
                ],
            num:1,
            qwe1:[
                {qname:"张北清",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.g},
                {qname:"韩梅梅",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.h},
                {qname:"张北清",wname:"副主任医师",ename:"北京协和医院  儿科",fname:"擅长：感冒 小儿支气管哮喘、小儿感冒、鼻炎、睡...",imgs:this.g},
                ],
            qwe2:[
                    {qname:"夏天不能光脚丫、不能吃冰激凌？",wname:this.e,sum:86565454},
                    {qname:"夏天不能光脚丫、不能吃冰激凌？",wname:this.e,sum:4564161},
                    {qname:"夏天不能光脚丫、不能吃冰激凌？",wname:this.e,sum:111111},
                    {qname:"夏天不能光脚丫、不能吃冰激凌？",wname:this.e,sum:2222222},
                    ]
        }
    },
    methods:{
        qwer(){
            window.history.go(-1)
        },
        wsx(){
            var num=document.querySelector(".y7>div:nth-child(4)");
            num.style.opacity=1;
            var num1=document.querySelectorAll(".y7>div:not(:nth-child(4))");
            num1[0].style.opacity=0;
            num1[1].style.opacity=0;
            num1[2].style.opacity=0;
            this.num=4;
        },
        qaz(){
            var num=document.querySelector(".y7>div:nth-child(3)");
            num.style.opacity=1;
            var num1=document.querySelectorAll(".y7>div:not(:nth-child(3))");
            num1[0].style.opacity=0;
            num1[1].style.opacity=0;
            num1[2].style.opacity=0;
            this.num=3;
        },
        zxc(){
            var num=document.querySelector(".y7>div:nth-child(2)");
            num.style.opacity=1;
            var num1=document.querySelectorAll(".y7>div:not(:nth-child(2))");
            num1[0].style.opacity=0;
            num1[1].style.opacity=0;
            num1[2].style.opacity=0;
            this.num=2;
        },
        asd(){
            var num=document.querySelector(".y7>div:first-child");
            num.style.opacity=1;
            var num1=document.querySelectorAll(".y7>div:not(:first-child)");
            num1[0].style.opacity=0;
            num1[1].style.opacity=0;
            num1[2].style.opacity=0;
            this.num=1;
        },
        qwe(e){
            var eee=e.target;
            if(eee.nodeName=="SPAN"){
                var rrr=document.querySelector(".y6 .y8")
                if(rrr!=null){
                    rrr.className="";
                }
                eee.className="y8"
            }
        }
    },
    props:{
        q:{default:""},
        w:{default:""},
        s:{default:""},
        e:{default:""},
        f:{default:""},
        g:{default:""},
        h:{default:""},
        u:{default:""},
    }
}
</script>
<style scoped>
    .y1{
        width:360px;
        height:44px;
        position:fixed;
        top:0px;
        background-color:#fff;
        z-index:2;
    }
    .y2{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 365px;
        height: 44px;
    }
    .y3{
        border-width: 0px;
        position: absolute;
        left: 50%;
        top: -1px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
    .y4{
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
    .y4>img{
        width:20px;
        height:20px;
        cursor:pointer;
        margin:0px 10px 0px 25px;
    }
    .y4>input{
        width:228px;
        height:25px;
        cursor:pointer;
        padding:0px 10px;
        font-weight:200;
        border:0;
        outline:none;
    }
    .y5>div:last-child{
        position:absolute;
        top:68px;
        left:316px;
        color:#999;
    }
    .y6{
        width:325px;
        margin:0px auto;
    }
    .y6>ul{
        list-style:none;
        display:flex;
        justify-content:space-between;
        padding:0px;

    }
    .y6 li{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color: #999999;
    }
    .y7{
        width:340px;
        height:4px;
        display:flex;
        margin:0px auto;
        position:relative;
    }
    .y7>div{
        width:44px;
        height:4px;
        background-color:rgba(0, 200, 170, 1);
        border-radius:4px;
        opacity:0;
    }
    .y7>div:first-child{
        position:absolute;
        top:0px;
        left:0px;
        opacity:1;
    }
    .y7>div:nth-child(2){
        position:absolute;
        top:0px;
        left:99px;
    }
    .y7>div:nth-child(3){
        position:absolute;
        top:0px;
        left:198px;
    }
    .y7>div:nth-child(4){
        position:absolute;
        top:0px;
        left:299px;
    }
    .y8{
        font-weight: bold;
        color: rgb(0, 200, 170);
    }
    .y9{
        width:325px;
        margin:20px auto 0px;
        display:flex;
        justify-content:space-between;
    }  
    .y10,.y11,.y12{
        height:77px;
    }
    .y10{
        width:109px;
        line-height:90px;
        text-align:center;
    }
    .y10>img{
        width:24px;
        height:21px;
    }
    .y11{
        
        line-height:27px;
    }
    .y11>div:first-child{
        margin-top:10px;
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        text-align:left;
    }
    .y11>div:last-child{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 12px;
        text-align:left;
    }
    .y12{
        line-height:77px;
        font-size: 12px;
        color: #999999;
        font-family: '思源黑体';
        font-weight: 400;
        margin-left:10px;
    }
    .y13>span{
        font-size: 12px;
        color: #CCCCCC;
    }
    .y13{
        width:110px;
        margin:20px auto;
        display:flex;
        align-items:center;
        text-align:center;
        justify-content:space-between;
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
    .y15>div:not(:last-child){
        width:325px;
        margin:30px auto 0px;
        text-align:left;
        font-family: '思源黑体';
        font-weight: 400;
        font-size:16px;
    }
    .y16{
        margin-top:30px;
    }
    .y16>span{
        font-size: 12px;
        color: #CCCCCC;
    }
    .y17{
        width:325px;
        margin:30px auto 0px;
        display:flex;
        justify-content:space-between;
    }
    .y17>div>div{
        text-align:left;
    }
    .y17>div>div:not(:last-child){
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color: #333333;
    }
    .y17>div>div:last-child{
        font-size: 12px;
        color: #CCCCCC;
        font-family: '思源黑体';
        font-weight: 400;
        margin-top:20px;
    }
    .y17>div:last-child{
        width:109px;
        line-height:74px;
    }
</style>