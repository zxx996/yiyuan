<template>
<!-- import func from './vue-temp/vue-editor-bridge'; -->
           <div class='bt'>
             
                <div class='b1'>
                  <span class='a3'><font>我的</font></span>
                  <img @click='xiaoxi' class='a4' :src='c'>
                </div>
                <div class='a5' v-if="id!=0">
                  <img :src='d' >
                </div>
                <div class='a11' v-if="id==0">
                </div>
                 <div v-if="id==0" @click="qwe" class="a14"><span>请登陆</span></div>
                 <span class='a6' v-else>{{name}}</span>
                 <div class='a7' v-if="id!=0">
                    <div class='a8'>
                        <p >150</p>
                        <span>收藏</span>
                    </div>
                    <div class='a9'>
                        <p>23</p>
                        <span >关注医生</span>
                    </div>
                    <div class='a10'>
                        <p>3</p>
                        <span>优惠卷</span>
                    </div>
                </div>
           </div> 
</template>
<script>
    export default{

        data(){
            return{
                    name:"",
                    id:0,
            }
        },
        created:function(){
            this.se();
        },
      props:{
          a:{default:''},
          b:{default:''},
          c:{default:''},
          d:{default:''}
      },
      methods:{
          
          xiaoxi(){
              this.$router.push('/xiaoxi')
          },
          se(){
              this.axios("sename").then(res=>{
                  //console.log(res.data)
                  var span=document.getElementById("uname");
                  var button=document.getElementById("login1")
                  if(res.data.code==1){
                      this.id=1;
                     this.name=res.data.data[0].uname;
                  }else{
                        this.id=0;
                  }
              })
          },
          qwe(){
              this.$router.push("login")
          }

      }
    }
</script>
<style scoped>
        
      .bt{
         position:relative;
         width:100%;
         height:280px;
        background:rgba(0, 200, 170, 1);
        z-index:0;
         overflow:hidden;
      }
      .a1{
          
          width:365px;height:44px;
          left:0;
      }
      .a2{
          position:fixed;
          top:-1px;left:50%;
          margin-left:-90px;
          z-index:1;
   
      }
      .b1{
          margin-top:44px;
          position:relative;
        display:flex;
        justify-content:space-between;
        align-items:center;
      }
      .a3{
         display:flex;
          font-family: '思源黑体 Bold', '思源黑体';
          font-weight: 700;
          font-size: 24px;
          color: #FFFFFF;
          margin-left:24px;
      }
       .a4{
           display:flex;
           margin-right:24px;
           width:18px;height:22px;
       }
       .a4:hover{
            cursor:pointer;
       }
       .a5{
           position:relative;
           left:24px;top:25px;
           background:#fff;
           width:50px;height:50px;
           border-radius:50%; 
       }
       .a5>img{
           position:absolute;
           top:50%;margin-top:-10px;
           left:50%;margin-left:-11px;
       }
       .a6{
           position:relative;
            font-family:'思源黑体 Bold', '思源黑体';
            font-weight: 700;
            font-size: 16px;
            color: #FFFFFF;
            right:65px;bottom:10px;
            margin-left:30px;
        }
        .a7{
            display:flex;
             justify-content:space-between;
             width:325px;
             margin:28px auto 0px;
        }
        .a7 p{
            margin:0;
        }
         .a8,.a9,.a10{
             width:60px;
             font-size:13px;
             color:#fff;
             font-family: '思源黑体';
            font-weight: 400;
         }
         .a11{
           position:relative;
           left:24px;top:25px;
           width:50px;height:50px;
           border-radius:50%;
        }
        .a14{
            font-family:'思源黑体 Bold', '思源黑体';
            font-weight: 700;
            font-size: 16px;
            color: #FFFFFF;
            border:1px solid #ccc;
            width:100px;
            height:30px;
            margin:0px auto;
            line-height:30px;
            text-align:center;
        }
</style>