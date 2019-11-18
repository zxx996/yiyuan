<template>
    <div>
        <div class="u1">
            <img :src="q" alt="" class="u2">
            <img :src="w" alt="" class="u3">
        </div>
        <div class="u4">
            <div class="u5" @click="wsx" >
                <img :src="e" alt="">
                <span>支付方式</span>
            </div>
        </div>
        <div class="u6">
            <span>请在15分钟内完成支付，超时订单将取消</span>
        </div>
        <div class="u7">
            <div class="u8">
                <span>专家问诊-张清北医师</span>
                <span id="s1">¥{{num1}}.00</span>
            </div>
            <div class="u9">
                <span>优惠券</span>
                <div @click="yhn">
                    <span id="s2">-¥10.00</span>
                    <img :src="f" alt="">
                </div>
            </div>
            <div class="u10">
                <span>实付款</span>
                <span id="s3">¥{{yu}}.00</span>
            </div>
            <div class="u11">
                <span>选择支付方式</span>
            </div>
            <div class="u12">
                <div>
                    <div @click="qwe">
                        <img :src="g" alt="">
                        <span >微信支付</span>
                    </div>
                    <img :src="a" alt="">
                </div>
                <div>
                    <div @click="asd">
                        <img :src="h" alt="">
                        <span>支付宝支付</span>
                    </div>
                    <img :src="a" alt="">
                </div>
            </div>
            <div class="u13">
                咨询价格由医生划定，若医生未接诊或超过24小时未回复，将自动退款至您的账户。
            </div>
            <div class="u14" @click="zxc">
                <div ><img :src="a" alt=""></div>
                <span >我已同意</span>
                <span style="color:#00C8AB;">问诊协议</span>
            </div>
        </div>
        <div class="u15">
            <div class="u16">
                <span style="font-family:'思源黑体';font-weight:400;">合计   </span>
                <span style="font-family:'思源黑体 Bold', '思源黑体';font-weight:700;font-size:18px;color:#FF0000;">¥{{yu}}.00</span>
            </div>
            <div class="u17" @click="edc">
                <span >立即支付</span>
            </div>
        </div>
        <div class="u20">
            <div class="u21"></div>
            <div class="u22">
                <div class="u23">
                    <div class="u24">
                        <span>选择优惠券</span>
                        <img @click="ujm" :src="b" alt="">
                    </div>
                    <div class="u25">
                        <img :src="j" alt="">
                        <div>
                            <div class="u26">
                                <p><span style="font-family:'思源黑體 Medium', '思源黑體';font-weight:500;">问诊通用券</span></p>
                                <p><span style="font-family:'PingFang SC 常规', 'PingFang SC';font-weight:400;color:#CCCCCC;">仅限优医平台</span></p>
                                <p><span style="font-family:'PingFang SC 常规', 'PingFang SC';font-weight:400;color:#CCCCCC;">2029-08-01到期</span></p>
                            </div>
                            <div class="u27"><img @click="rfv" :src="a" alt=""></div>
                        </div>
                    </div>
                    <div class="u28">
                        <span>不使用优惠券</span>
                        <div><img  @click="tgb":src="a" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            yu:39,
            num:"微信支付",
            num1:"49"
            
            
        }
    },
    props:{
        q:{default:""},
        w:{default:""},
        e:{default:""},
        f:{default:""},
        g:{default:""},
        h:{default:""},
        a:{default:""},
        b:{default:""},
        j:{default:""},
    },
    methods:{
        youhui(){
             var a=document.getElementById("s1");
             this.num1=a.innerHTML.match(/\d+/ig);
             console.log(this.num1);
        },
        ujm(){
            var img=document.querySelector(".u20");
            img.style.display="none";
        },
        yhn(){
            var img=document.querySelector(".u20");
            img.style.display="block";
        },
        rfv(){
            var img2=document.querySelector(".u25>div img");
            var img=document.querySelector(".u28 img");
            var span=document.querySelector(".u9>div>span");
            img.style.opacity=0;
            img2.style.opacity=1;
            this.yu=49-10;
            span.style.visibility="";
            
        },
        tgb(){
            var img2=document.querySelector(".u25>div img");
            var img=document.querySelector(".u28 img");
            var span=document.querySelector(".u9>div>span");
            img.style.opacity=1;
            img2.style.opacity=0;
            this.yu=49;
            span.style.visibility="hidden";
           
        },
        qwe(){
            var img=document.querySelector(".u12>div:first-child>img");
            var img2=document.querySelector(".u12>div:last-child>img");
            img.style.opacity=1;
            img2.style.opacity=0;
            this.num="微信支付"
        },
        asd(){
            var img=document.querySelector(".u12>div:first-child>img");
            var img2=document.querySelector(".u12>div:last-child>img");
            img.style.opacity=0;
            img2.style.opacity=1;
            this.num="支付宝支付"
        },
        zxc(){
            var img=document.querySelector(".u14>div>img");
            if(img.style.opacity==1){
                img.style.opacity=0;
                return
            }
            img.style.opacity=1;
        },
        wsx(){
            window.history.go(-1)
        },
        edc(){
            var img=document.querySelector(".u14>div>img");
            if((img.style.opacity)>0){
                var ddid=Math.random()*9999999999999999+100000000000000;
                var time=new Date().toLocaleString();
                console.log(time)
                var yfk=this.num1;
                var yhj=this.num1-this.yu;
                var sjzf=this.yu;
                var zffs=this.num;
                var yid=1;
                var obj={yid,ddid,time,yfk,yhj,sjzf,zffs};
               // console.log(obj);
                this.axios.get("upbinqing2",{params:obj})
                .then(res=>{
                    if(res.data.code==1){
                        this.$router.push({name:"Home10",query:{yid:yid,ddid:ddid}})
                    }else{
                        this.$messagebox.confirm("支付失败,你没有登陆")
                        .then(res=>{
                            this.$router.push("login")
                        })
                        .catch(err=>{console.log(err)})
                    }
                })
                
            }else{
                this.$messagebox("请同意协议，在大声唱国歌三遍")
            }
        }
    }
}
</script>
<style scoped>
    .u1{
        width:360px;
        height:44px;
        position:fixed;
        top:0px;
        background-color:#fff;
        z-index:2;
    }
    .u2{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 365px;
        height: 44px;
    }
    .u3{
        border-width: 0px;
        position: absolute;
        left: 50%;
        top: -1px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
   .u4{
        width:375px;
        margin:56px auto 0px;
        position:fixed;
        left:0px;
        top:0px;
        background-color:#fff;
    }
    .u4>.u5{
        display:flex;
        align-items:center;
        margin-left:25px;
    }
    .u5>span{
        margin-left:10px;
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
        color:#333;
    }
    .u5>img{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px
    }
    .u6{
        width:100%;
        height:40px;
        background-color:rgba(255, 204, 0, 1);
        text-align:center;
        line-height:40px;
        margin-top:85px;
    }
    .u6>span{
        font-size: 12px;
        color: #FFFFFF;
        font-family: '思源黑体';
        font-weight: 400;
    }
    .u7{
        width:325px;
        margin:20px auto 0px;
    }
    .u8,.u9,.u10{
        display:flex;
        justify-content:space-between;
    }
    .u8>span,.u10>span{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color:#333;
    }
    .u9{
        margin:30px 0px;
       font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color:#333; 
    }
    .u10>span:last-child{
        color:#f00;
    }
    .u11{
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 16px;
        color:#333;
        text-align:left;
        margin-top:40px;
    }
    .u12{
        margin-top:20px;
    }
    .u12>div{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:30px;
    }
    .u12>div>img{
        width:20px;
        height:20px;
    }
    .u12>div>div>span{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color:#333;
        margin-left:20px;
    }
    .u12>div>div{
        display:flex;
        align-items:center;
    }
    .u13{
        font-size: 12px;
        color: #999999;
        text-align:left;
    }
    .u14>div{
        width:10px;
        height:10px;
        margin-right:5px;
        border:2px solid #e8e8e8;
        border-radius:50%;
    }
    .u14 img{
        width:14px;
        height:14px;
        opacity:0;
    }
    .u14{
        font-size: 12px;
        font-family: '思源黑体';
        font-weight: 400;
        color:#333;
        margin:100px 0px;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .u15{
        height:80px;
        width:375px;
        display:flex;
        position:fixed;
        bottom:0px;
        left:0px;
        margin-top:27px;
    }
    .u15>div{
        width:50%;
        line-height:80px;
    }
    .u17{
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 16px;
        color: #FFFFFF;
        background-color: rgba(0, 200, 171, 1);
    }
    .u16{
        background-color:#fff;
    }
    .u12>div:last-child>img{
        opacity:0;
    }
    .u20{
        width:100%;
        height:667px;
        position:fixed;
        top:0px;
        left:0px;
        z-index:2;
        display:none;
    }
    .u21{
        height:60%;
        width:100%;
        background-color:rgba(0, 0, 0, 0.498039215686275);
    }
    .u22{
        height:40%;
        width:100%;
        background-color:#fff;
    }
    .u22:before{
        content:"";
        display:table;
    }
    .u23{
        width:325px;
        margin:20px auto 0px;
    }
    .u24{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .u24>span{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        color: #666666;
    }
    .u24>img{
        width: 14px;
        height: 14px;
        transform:rotate(42deg);
    }
    .u25{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:25px 0px;
    }
    .u25>div{
        width:203px;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-shadow:2px 2px #eee;
    }
    .u26>p{
        margin:10px 0px;
    }
    .u26{
        text-align:left;
    }
    .u26>p:first-child{
        font-size: 14px;
    }
    .u26>p:not(:first-child){
        font-size: 12px;
    }
    .u27,.u28>div{
        width:18px;
        height:18px;
        border:2px solid #e8e8e8;
        border-radius:50%;
        margin-right:10px;
    }
    .u27>img,.u28 img{
        width:18px;
        height:18px;
    }
    .u28{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .u28>span{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color:#333;
    }
    .u28 img{
        opacity:0;
    }
</style>
