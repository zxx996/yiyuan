<template>
<div>
   <div class="head1">
		<div class="neike1">
		 	<img src="../../assets/zhishi/fanhui.png" style="margin-left:10px;" @click="fanhui">
			 		知识详情
			 <div class="fenxiang">
				<img src="../../assets/zhishi/fx (2).png" >
				<img src="../../assets/zhishi/fx (1).png"  style="margin-right:20px;" >
			 </div>
	    </div>
	</div>	
		<div class="zbu">
			<div style="font-size:16px;color:#000 ">{{list[0].title}}</div>
			<div style="margin:10px 0;font-size:10px;color:#c8c8cd；text-align:left">9999次浏览 </div>
			<div class="text action">
			{{list[0].body}}
			<img src="../../assets/zhishi/55555.jpg" alt="" style="width:100%">
{{list[0].body}}
			</div>

			<div>
				<div class="ysjs">
					<div><img src="../../assets/zhishi/timg.jpg" alt=""></div>
					<div>
						<div> <b style="font-size:15px;">张清北</b> <span style="font-size:13px;">副主任医师</span><button class="wys">关注</button></div>
						<div  style="font-size:12px;">北京协和医院 儿科</div>
					</div>
				</div>
			</div>
			</div>
			<div>
				<div class="yuedu">推荐阅读</div>
				<div class="neirong">
					<span>夏天不能光脚丫、不能吃冰激凌? 别用养生折腾孩子了</span>
					<img src="../../assets/zhishi/zs.jpg" alt="">
					<div class="liulan">9995次浏览</div>
				</div>
			</div>
			<div>
				<div class="yuedu">推荐阅读</div>
				<div class="neirong">
					<span>夏天不能光脚丫、不能吃冰激凌? 别用养生折腾孩子了</span>
					<img src="../../assets/zhishi/zs.jpg" alt="">
					<div class="liulan">9995次浏览</div>
				</div>
			</div>
			<div>
				<div class="yuedu">推荐阅读</div>
				<div class="neirong">
					<span>夏天不能光脚丫、不能吃冰激凌? 别用养生折腾孩子了</span>
					<img src="../../assets/zhishi/zs.jpg" alt="">
					<div class="liulan">9995次浏览</div>
				</div>
			</div>
		</div>

</template>
<script>
export default {
	data(){
		return{
			list:[""]
		}
	},
	created(){
		this.duqu();
	},
	methods:{
		duqu(){
			var id=this.$route.params.id;
			var obj={id}
			this.axios.get("zhishi2",{params:obj})
			.then(res=>{
				this.list=res.data.data 
				console.log(this.list[0].title)
			})
		},
		fanhui(){
			window.history.go(-1)
		}
	}
}
</script>

<style scoped>
		.yuedu{
			font-weight: 600;
			margin: 10px 10px 0 10px;
			text-align: left;
			font-size:16px;
			color:#2c3e50bf;
		}
		.neirong{
			text-align: left;
			padding-top:10px;
			border-bottom:1px solid #eaeaea; 
			padding-bottom: 5px;
		}
		.neirong>span{
			font-size: 12px;
			color: #707274;
			width:65%;
			display: inline-block;
			line-height:20px;
			margin: 5px 10px 0;		
		}
		.neirong>img{
			width:20%;
			float:right;
			margin: 5px 10px 0;	
			border-radius: 10px;
		}
		.liulan{
			font-size: 10px;
			margin: 5px 10px 0;	
			color:#4caf5094;
		}
    
	   *{margin:0;padding:0;}
		.head1{
			position: fixed;
			left: 0;
			top:0;
			width:100%;
			background-color: #fff;
            margin:0 0 0 0;
			border-bottom: 1px solid #f6f8fa;

		}
		.neike1{
			position: relative;
		    position: fixed;
      		top: 15px;
			display:flex;
			width:100%;
			height: 65px;
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
			padding:17px 0px 0 0px;
		}
        .fenxiang{
			position: absolute;
			top:0;
			right:0;
			
			 
        }
		 .fenxiang>img{
			margin: 20px 10px 0; 
			width: 20px;
		 }

		.jj{
			width: 100%;
			 position: relative;	
			
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
			line-height: 25px;
			color:#707274;
			margin-top: 80px;
			text-align: left;
			padding: 0 20px;
			font-size: 13px;
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
		/* 医生简介 */
		.ys{
			margin: 15px 0;
			
		}
		.ysjs{
			display: flex;
			font-size: 12px;
			margin:10px 0;
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
			margin-top:20px;
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