<template>
    <div>
        <div class="u1">
            <img :src="q" alt="" class="u2">
            <img :src="w" alt="" class="u3">
        </div>
        <div class="u4">
            <div class="u5" @click="rff">
                <img :src="e" alt="">
                <span>描述病情</span>
            </div>
        </div>
        <div class="u6">
            <div class="u7">请描述您的病情</div>
            <input style="color: rgb(204, 204, 204);" type="text" placeholder="请描述你的性别年龄、症状、就诊经历等信息" v-model="nr">
            <span>本次患病多久了？</span>
            <ul class="u8" @click="qwe">
                <li v-for="(ui,p) of num1" :key="p" >{{ui}}</li>
            </ul>
            <span>此次病情是否去医院就诊过？</span>
            <ul class="u9" @click="wsx">
                <li v-for="(as,a) of num2" :key="a">{{as}}</li>
            </ul>
            <div class="u10">
                <div>
                    <img :src="f" alt="">
                    <p>上传图片</p>
                </div>
                <div>上传检查报告或患处照片（最多9张）</div>
            </div>
            <div class="u11" @click="qwer">
                选择患者信息
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:0,
            num1:["一周内","一个月","半年内","大半年内"],
            num2:["就诊过","没就诊过"],
            num3:[],
            nr:""
        }
    },
    props:{
        q:{default:""},
        w:{default:""},
        e:{default:""},
        f:{default:""},
    },
    methods:{
        rff(){
            window.history.go(-1)
        },
        qwer(){
            var div1=document.querySelector(".u8>.u12")
            var div=document.querySelector(".u9>.u12")
            if(div!=null && div1!=null){
                this.$messagebox.confirm("信息填写无误?")
                .then(res=>{
                    this.num3.push(this.nr);
                    var bingqin=this.num3[2];
                    var hbsj=this.num3[0];
                    var sfjz=this.num3[1];
                    var obj={bingqin,hbsj,sfjz}
                  //  console.log(obj);
                    this.axios.get("binqin",{params:obj})
                    .then(res=>{
                       // console.log(res);
                        if(res.data.code==1){
                            this.$router.push("Home7")
                        }else{
                            this.$messagebox.confirm("未登陆,是否登陆"
                            ).then(res=>{
                                this.$router.push("login")
                            })
                            .catch(err=>{console.log(err)})
                        }
                        })
                    .catch(err=>{ console.log(err)})
                    })
                .catch(err=>{ console.log(err) })
            }else{
                this.$messagebox("请把信息填写完整")
            }
        },
        qwe(e){
            var div3=e.target
            var div1=document.querySelector(".u8>.u12")
            if(div1!=null){
                div1.className="";
            }
            div3.className="u12";
            this.num3.push(div3.innerHTML)
        },
       
        wsx(e){
           var div3=e.target 
            var div1=document.querySelector(".u9>.u12")
            if(div1!=null){
                div1.className="";
            }
            div3.className="u12"
           this.num3.push(div3.innerHTML)
        },
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
        top: -5px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
   .u4{
        width:325px;
        margin:56px auto 0px;
       
    }
    .u4>.u5{
        display:flex;
        align-items:center;
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
        width:325px;
        margin:30px auto 0px;
        text-align:left;
        position:relative;
    }
    .u6>.u7{
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
        color:#333;
    }
    .u6>input{
        margin-top:15px;
        margin-bottom:90px;
        width:100%;
        border:0;
        height:30px;
        outline:none;
    }
    .u6>span{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size:14px;
        color:#333;
    }
    .u8,.u9{
        display:flex;
        justify-content:space-between;
        margin-top:10px;
        margin-bottom:20px;
        color: #00C8AB;
        font-size:14px;
        padding-left:0px;
    }
    .u8>li,.u9>li{
        width:75px;
        height:35px;
        border:1px solid rgba(0, 200, 171, 1);
        border-radius:4px;
        line-height:35px;
        text-align:center;
        list-style:none;
    }
    .u9{
        width:160px;
    }
    .u10{
        display:flex;
        
    }
    .u10>div:first-child{
        width:80px;
        height:80px;
        text-align:center;
        font-size: 12px;
        color: #999999;
    }
    .u10>div>img{
        margin-top:21px;
    }
    .u10>div>p{
        margin:0px;
    }
    .u10>div:last-child{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        line-height:80px;
    }
    .u11{
        height:44px;
        width:325px;
        line-height:44px;
        text-align:center;
        background-color: rgba(0, 200, 170, 1);
        border-radius:44px;
        color:#fff;
        position:absolute;
        top:480px;
    }
    .u12{
        color:#fff;
        background-color:rgba(0, 200, 171, 1);
    }
</style>