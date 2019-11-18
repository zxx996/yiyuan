<template>
    <div>
        <div class="p1">
            <img :src="q" alt="" class="p2">
            <img :src="w" alt="" class="p3">
        </div>
        <div class="p4">
            <div class="p5" @click="qwe">
                <img :src="e" alt="">
                <span>选择患者</span>
            </div>
        </div>
        <div class="p6">
            <p><span>请选择患者信息</span></p>
            <div  v-for="(elem,i) of num" :key="i" @click="select(i)" :id="'s'+i" class="p7"
            >
                <div class="p10">
                    <div class="p8">
                        <span>{{elem.uname}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>{{elem.sex==1?"男":"女"}}&nbsp;&nbsp;&nbsp;&nbsp;{{date-elem.date}}</span>
                        
                    </div> 
                </div>
                <div class="p11">
                    <span>{{elem.sfz}}</span>
                    <span>{{elem.iphone}}</span>
                </div>
            </div>
            <div style="display:flex;">
            <div class="p13" @click="shanchu(xz)">
                <img :src="t" alt="">
                <p>删除</p>
            </div>
            <div class="p13" @click="sss">
                <img :src="t" alt="">
                <p>添加患者</p>
            </div>
            </div>
            <div class="p14" @click="out">
                下一步
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:[""],
            date:new Date().getFullYear(),
            value:"",
            xz:""
        }
    },
    props:{
        q:{default:""},
        w:{default:""},
        e:{default:""},
        r:{default:""},
        t:{default:""},
    },
    methods:{
        qwe(){
            window.history.go(-1)
        },
        out(){
            //console.log(this.num[this.xz]);
            console.log(this.xz);
             if(this.xz===""){this.$toast("请选择患者信息");return}
            var xinxi=this.num[this.xz];
            
            var date=xinxi.date;
           
            var iphone=xinxi.iphone;
            var sex=xinxi.sex;
            var sfz=xinxi.sfz;
            var uname=xinxi.uname;
            var obj={date,iphone,sex,sfz,uname};
            this.axios.get("upbinqing",{params:obj})
            .then(res=>{
                if(res.data.code==1){
                   this.$router.push("Home9") 
                }else{
                    console.log(res.data);
                    this.$toast("添加失败")
                }
                
            })
            .catch(err=>{
                console.log(err)
            })

            
        },
        shanchu(i){
            var uname=this.num[i].uname;
           this.$messagebox.confirm("是否要删除")
           .then(res=>{
                var obj={uname}
                this.axios.get("delete",{params:obj})
                .then(res=>{
                // console.log(res.data);
                    if(res.data.code==1){
                        this.num.splice(i,1); 
                        this.$toast("删除成功")
                        this.in();
                    }
                })
                .catch(err=>{console.log(err)})
           })
           .catch(err=>{console.log(err)})
           
        }
        ,
        sss(){
            
            this.$router.push("Home8")
        },
        in(){
            this.axios.get("family")
            .then(res=>{
                this.num=res.data.data
                if(res.data.code==-1){
                     this.$messagebox.confirm("未登陆,是否登陆"
                            ).then(res=>{
                                this.$router.push("login")
                            })
                            .catch(err=>{console.log(err)})
                }
                //console.log(this.num);
            })
            .catch(err=>{
                console.log(err)
            })
        },
        select(i){
            for(var a=0;a<this.num.length;a++){
                if(i==a){
                    var div=document.getElementById(`s${a}`);
                     div.style="border:1px solid #0f0";
                     this.xz=i;
                    
                }else{
                     var div=document.getElementById(`s${a}`);
                     div.style="";  
                }
            }
            //console.log(this.num[i]);
        }
    },
    created:function(){
        this.in();
    }
}
</script>
<style scoped>
    .p1{
        width:360px;
        height:44px;
        position:fixed;
        top:0px;
        background-color:#fff;
        z-index:2;
    }
    .p2{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 365px;
        height: 44px;
    }
    .p3{
        border-width: 0px;
        position: absolute;
        left: 50%;
        top: -1px;
        margin-left:-85px;
        width: 170px;
        height: 30px;
    }
   .p4{
        width:325px;
        margin:56px auto 0px;
       
    }
    .p4>.p5{
        display:flex;
        align-items:center;
    }
    .p5>span{
        margin-left:10px;
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 18px;
        color:#333;
    }
    .p5>img{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px
    }
    .p6{
        width:325px;
        margin:30px auto 0px;
        position:relative;

        
    }
    .p6>p{
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 20px;
        text-align:left;
        color:#333;
    }
    .p7{
        width:100%;
        height:96px;
         border:1px solid #ccc;
        border-radius:8px;
        margin-top:10px;
        padding:15px;
        box-sizing:border-box;
        color:#333;
    }
    .p10{
        display:flex;
        justify-content:space-between;
    }
    .p11{
        display:flex;
        justify-content:space-between;
        line-height:60px;
    }
    .p8>span:first-child{
        font-family: '思源黑体 Bold', '思源黑体';
        font-weight: 700;
        font-style: normal;
        font-size: 16px;
    }
    .p8>span:last-child,.p11>span{
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
    }
    .p13{
        height:96px;
        width:100%;
        margin-top:30px;
    }
    .p13>p{
        margin-top:5px;
        font-family: '思源黑体';
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        color:#999;
    }
    .p14{
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
</style>