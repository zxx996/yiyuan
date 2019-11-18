<template>
    <div id='bk'>
        <img class='a1' src='../../assets/my/tb1.png'>
        <img class='a2' src='../../assets/my/tb2.png'>
            <bt
              :a="require('../../assets/my/tb1.png')" 
              :b="require('../../assets/my/tb2.png')" 
              :c="require('../../assets/my/ld.png')"
              :d="require('../../assets/my/tx.png')"
            
            ></bt>
            <lb
              :a="require('../../assets/my/ystx.png')" 
              :b="require('../../assets/my/ystx.png')" 
              :c="require('../../assets/my/ystx.png')"
            ></lb>
            <xbb
              :a="require('../../assets/my/zjwz.png')" 
              :b="require('../../assets/my/kywz.png')" 
              :c="require('../../assets/my/yp.png')"
              :d="require('../../assets/my/jtda.png')" 
              :e="require('../../assets/my/wdcf.png')" 
              :f="require('../../assets/my/wdys.png')"
              :g="require('../../assets/my/yjfk.png')" 
              :h="require('../../assets/my/cjwt.png')" 
              :i="require('../../assets/my/tjyl.png')"
              :j="require('../../assets/my/lxkf.png')" 
              :k="require('../../assets/my/sz.png')" 
            ></xbb>
            
    </div>
</template>
<script>
    import dibu from "../dibuzujian/dibu.vue"
    import bt from './wode.vue'
    import lb from './lunbo.vue'
    import xbb from './xbb.vue'
    export default{
        data(){
            return{

            }
        },
       components:{
           'bt':bt,
           'lb':lb,
           'xbb':xbb,
           "dibu":dibu
       }
    }
</script>
<style scoped>
     *{
         margin:0;
     }
    /* #bk{
        position: absolute;
        float: left;
        z-index: 999;
        width:369px;height:667px;
        border-radius:44px;
        border:3px solid #000;
        overflow:auto;
        box-sizing:border-box;
    } */
     .a1{
         position:fixed;
          width:365px;height:44px;
          left:2px;
          z-index:1;
      }
      .a2{
          position:fixed;
          top:-1px;left:95px;
          z-index:1;
   
      }
      img.a1{
          background:rgba(0,200,170,1)
      }



</style>