<template>
<div>
   <div class="head1">
		<div class="neike1">
		 	<img src="../../assets/zhaoyiyuan/fanhui1.png"><p>医院主页</p>
             <img src="../../assets/zhaoyiyuan/fx.png" class="fenxiang">
	    </div>
	</div>
		<div class="jianjie">
			<div class="yiyuan">
				<img src="../../assets/zhaoyiyuan/yiyuan.png" alt="">
				<p class="font">中国人民解放军总医院<br><span style="color:red">三级甲等</span> &nbsp;&nbsp;<span>综合医院</span></p>
			</div>
			<div class="dizhi">
				<mt-cell title=" 地址" is-link class="font-dizhi">
  					<span class="jt">
北京市西城区南礼士路33号</span>
				</mt-cell>
			</div>
			<div class="phone">
				<mt-cell title=" 电话" is-link class="font-dizhi">
  					<span class="jt">
010-24555455</span>
				</mt-cell>
			</div>
		</div>	
		<div class="zbu">
			<div>
				医院介绍 <img class="image" src="../../assets/zhaoyiyuan/zhangkai.png" alt="">
			</div>
			<div class="text action">
			北京大学第三医院（简称“北医三院”）建于1958年，国家卫生健康委委管医院，集医疗、教学、科研、预防、康复与保健为一体的综合性三甲医院。2018年底，在岗职工5157人，开放床位1891张。医院有36个临床科室、10个医技科室。北京大学第三医院（简称“北医三院”）建于1958年，国家卫生健康委委管医院，集医疗、教学、科研、预防、康复与保健为一体的综合性三甲医院。2018年底，在岗职工5157人，开放床位1891张。医院有36个临床科室、10个医技科室。
			</div>
			<div>
				<div class="ys">院内医生</div>
				<div class="ysjs">
					<div><img src="../../assets/zhaoyiyuan/tt.png" alt=""></div>
					<div>
						<div> <b style="font-size:15px;">张清北</b> <span style="font-size:13px;">副主任医师</span></div>
						<div  style="font-size:12px;">北京协和医院 儿科</div>
						<div class="zhuzhi">擅长：儿科 ，小儿支气管哮喘，小儿感冒擅长：儿科 ，小儿支气管哮喘，小儿感冒</div>
						<div> 好评率: <span style="color:green"> 92.2% </span> 咨询量: <span style="color:green"> 2222</span></div>
						<div><b style="color:green">￥49 </b><button class="wys">.问医生</button></div>
					</div>
				</div>
				<div class="ysjs">
					<div><img src="../../assets/zhaoyiyuan/tt.png" alt=""></div>
					<div>
						<div> <b style="font-size:15px;">张清北</b> <span style="font-size:13px;">副主任医师</span></div>
						<div  style="font-size:12px;">北京协和医院 儿科</div>
						<div class="zhuzhi">擅长：儿科 ，小儿支气管哮喘，小儿感冒擅长：儿科 ，小儿支气管哮喘，小儿感冒</div>
						<div> 好评率: <span style="color:green"> 92.2% </span> 咨询量: <span style="color:green"> 2222</span></div>
						<div><b style="color:green">￥49 </b><button class="wys">.问医生</button></div>
					</div>
				</div>
				<button class="gduo">更多1236位医生</button>
				<div class="pjia">
					<span style="font-size:16px;">患者评价</span><span>(1026)</span><span class="haop">好评率 </span>
					<span style="color:green"> 99% </span> >
					<div class="pj"> <b style="color:15px;">匿名用户 </b><img class="wjx" src="../../assets/zhaoyiyuan/wjx.png" alt=""><img class="wjx" src="../../assets/zhaoyiyuan/wjx.png" alt=""><img class="wjx" src="../../assets/zhaoyiyuan/wjx.png" alt=""><img class="wjx" src="../../assets/zhaoyiyuan/wjx.png" alt=""><img class="wjx" src="../../assets/zhaoyiyuan/wjx.png" alt=""></div>
					<div>谢谢廖医生的详细讲解 一步步指导的很好 我们已经都
做过检测了在准备手术了。</div>
					<button class="gduo">更多1236个评论</button>
				</div>
				
			</div>
		</div>

</div>
</template>
  <script>
    // var but=document.getElementsByClassName("image");
    // var div=document.getElementsByClassName("text");
	// var temp=0; //0为显示
    // but[0].touchstart=function(){
    //   if(temp==0){ //本来是显示的，所以就隐藏咯
    //     div[0].style='';
    //     temp=1; //隐藏了就把状态改变了
    //     console.log(0)
    //   }else{
    //     div[0].style="action";
    //     temp=0;
    //     console.log(1)
    //   }
    // }
  </script>
<style scoped>
       *{margin:0;padding:0;}
		.head1{
			width:100%;
			height: 150px;
			background-color: #22d8c8;
            color:#fff;
            margin:0 0 0 0;
		}
		.neike1{
		    position: fixed;
      		top: 25px;
			display:flex;
			width:100%;
			height: 70px;
			line-height: 60px;
			text-align: left;
             position: relative;
		}
		.neike1>p{
			font-size: 18px;
		}
		.neike1>img{
			width:20px;
			height:20px;
			padding:22px 10px 0 15px;
		}
        .fenxiang{
             position: absolute;
             left:85%;
        }
		.jj{
			width: 100%;
			 position: relative;
			
			
		}
		.jianjie{
			width: 80%;
			height: 150px;
			background-color:#FFF;
			margin: -15%  10%  0 ;
			border-radius: 10px;
		}
		.yiyuan{
			width: 100%;
			height:50%;
			display: flex;
			border: none;
			
		}
		.yiyuan>img{
			margin: 5% 5% 0; 
			width: 50px;
			height: 50px;
		}
		.yiyuan>p{
			margin: 5% 5% 0; 
			height: 100%;
			line-height: 28px;
			text-align: left;
		
		}
		.yiyuan>p>span{
			font-size: 12px;
		}
		.font-dizhi{
			text-align: left;
			padding-left: 10px;
			font-size: 14px;
			color: rgba(0,0,0, 0.4);
		}
		.phone{
			padding-top: 10px;
		}
		.jt{
			padding-right: 10px;	
			color:#000;
			font-size: 13px;

		}
		.yiyuan>p>span{
			margin-top: 3px;
		}
		.dizhi{
			width: 100%;
			height: 25%;
		}
		.phone{
			width: 100%;
			height: 25%;
		}
		/* 中间部分 */
		.zbu{
			margin-top: 20px;
			text-align: left;
			padding: 0 20px;
			font-size: 16px;
		color: rgba(0,0,0,);
		}
		.zbu>div>img{
			width: 15px;
			float: right;
			margin-top: 10px;
		}
		.zbu>div:nth-child(2){
			font-size: 12px;	
			margin-top: 10px;
			line-height: 20px;
		}
        .action{
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:4; 
		}
		/* 医生简介 */
		.ys{
			margin: 15px 0;
			
		}
		.ysjs{
			display: flex;
			font-size: 12px;
		}
		.ysjs>div>div{
			margin-top: 8px;
		}
		.zhuzhi{
			overflow:hidden; 
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:1; 
		}
		.ysjs>div>img{
			width: 80%;
		}
		
		.ysjs>div:nth-child(1){
			width: 20%;

	
		}
		.ysjs>div:nth-child(2){
			width: 80%;

		}
		.wys{
			float: right;
			color:#b6efb2;
			background-color: #fff;
			border: 1px solid #b6efb2;
			border-radius: 20px;
			padding: 5px 10px;

		}
		.gduo{
			float: right;
			color:#b6efb2;
			background-color: #fff;
			border: 1px solid #b6efb2;
			border-radius: 20px;
			padding: 5px 10px;
			margin:0 30%;
		}
		.pjia{
			margin-top:20px;
			font-size:12px;
		}
		.haop{
			margin-left: 45%;
		}
		.wjx{
			width: 10px;
			padding: 10px 0 0 0;
			};
		.pj{
			padding: 8px 0;
		}
	</style>