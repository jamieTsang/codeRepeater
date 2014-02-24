/*!
 * 修改价格javascript主程序 v1.0
 * 请在jQuery环境下执行
 *
 * Copyright GZL International Travel Sevice Ltd.
 *
 * Date: Sat May 25 2013
 * Writen by jamieTsang 331252914@qq.com 
 */
$(function () {
	$('#generate').click(function(){
		$('#result').text();
		var star=parseInt($('#star').val());
		var end=parseInt($('#end').val());
		var topText=$('#rawTop').val();
		var midText=$('#rawText').val();
		var botText=$('#rawBot').val();		
		if(star==NaN){
			alert('请填写结束数字！');
		}else if(!(/\d+/.test(star.toString())&&/\d+/.test(end.toString()))){
			alert('请填写数字！');
		}else if(!(star<end)){
			alert('结束应该大于开始！');	
		}
		else if(midText==''){
			alert('源代码不能为空！');	
		}else{
			var result='';
			var dollarStar=$('#dollarStar').val();
			console.log(dollarStar);
			for(i=0;i<(end-star+1);i++){
				var num=dollarStar=='0'?(i+star+1):(i+1);
				midText=midText.replace(/{\$}/g,(num>9?num:'0'+num));
				result+=topText+'<!-- {line#'+(star+i)+'} -->\n'+midText+'\n<!-- {/line#'+(star+i)+'} -->\n'+botText+'\n';
				midText=$('#rawText').val();
			}
			$('#result').text(result);
		}
	});
});
function toClipboard(){
	var clip = new ZeroClipboard( $('#copy') );        
	clip.on( 'complete', function(client, args) {            
      alert("源代码已经复制到剪贴板！");       
	});
}