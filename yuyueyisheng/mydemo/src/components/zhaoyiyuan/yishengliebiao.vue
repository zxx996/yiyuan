<template>
<div>
	<div class="neike">
		<img src="../../assets/zhaoyiyuan/fanhui.png"><p>中国人民解放军总医院</p>
	</div>
	<div class="header">
         <div class="mint-searchbar head">
            <div class="mint-searchbar-inner ">
               <i class="mintui mintui-search img"></i> 
               <input type="search" placeholder="搜索医院、医院、疾病、知识" class="mint-searchbar-core">
            </div>
       </div>
	   <div class="xuanxiang">
	   		<div class="cs">北京<img src="../../assets/zhaoyiyuan/s.png"></div>
			<div class="zh">综合排序<img src="../../assets/zhaoyiyuan/s.png"></div>
            <div class="zh">综合排序<img src="../../assets/zhaoyiyuan/s.png"></div>
	   </div>
      
    </div> 
	  <div style="margin-top:190px;">
           <div class="ysjs">
				<div><img src="../../assets/zhaoyiyuan/tt.png" alt=""></div>
				<div>
					<div> <b style="font-size:15px;">张清北</b> <span style="font-size:13px;">副主任医师</span></div>
					<div  style="font-size:12px;">北京协和医院 儿科</div>
					<div class="zhuzhi">擅长：儿科 ，小儿支气管哮喘，小儿感冒擅长：儿科 ，小儿支气管哮喘，小儿感冒</div>
					<div> 好评率: <span style="color:green;margin-right:15px;"> 92.2% </span> 咨询量: <span style="color:green"> 2222</span></div>
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
       </div> 
</div>
	
	
</template>
<script>
	
</script>
<style scoped>
	.neike{
    	position: fixed;
    	top: 0px;
		display:flex;
		width:110%;
		margin:0 -10px;
        background-color: #fff;
		height: 70px;
		border-bottom:1px solid #f6f8fa;  
		line-height: 62px;
		text-align: left;
	}	
	.neike>p{
		font-size: 18px;
	}
	.neike>img{
		width:20px;
		height:20px;
		padding:40px 10px 0 15px;
	}
	.header{
		position: fixed;
		top: 70px;
		width: 100%;
		background-color: #fff;
		left: 0px
   	}
   	.head{
     	background-color: #fff; 
   	}
	.mint-searchbar::before{
		border:0px solid red !important; 
	}
   	.mint-searchbar-inner{
		border:1px solid #fafafa;  
		border-radius: 20px;
        background-color: #fafafa !important;
	}
    input{
        background-color: #fafafa !important;
    }
	.mint-searchbar-core{
		width:90%;
	}
	.mint-searchbar-inner .mintui-search{
		font-size:20px  !important;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 3px;
	}
	.xuanxiang{
		width: 100%;
		margin-left:-20px;
		height: 50px;
		padding: 0 20px;
		font-size:14px;
		border-bottom:1px solid#f6f8fa;  
	}
	.xuanxiang> div{
		padding:0 6%;
		display: inline-block;
	}		
	.cs{
		display:flex;	
	}
	.zh{		
		display:flex;	
	}
	.xuanxiang>div>img{
		width:10px;
		height:10px;
		margin:25px 0 0 8px;
	}
	.ysjs{
		display: flex;
		font-size: 12px;
        text-align: left;
        margin-top: 15px;
		padding:0 10px;
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
	</style>