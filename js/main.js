/*!
 * �޸ļ۸�javascript������ v1.0
 * ����jQuery������ִ��
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
			alert('����д�������֣�');
		}else if(!(/\d+/.test(star.toString())&&/\d+/.test(end.toString()))){
			alert('����д���֣�');
		}else if(!(star<end)){
			alert('����Ӧ�ô��ڿ�ʼ��');	
		}
		else if(midText==''){
			alert('Դ���벻��Ϊ�գ�');	
		}else{
			var result='';
			var dollarStar=$('#dollarStar').val();
			console.log(dollarStar);
			for(i=0;i<(end-star+1);i++){
				var num=dollarStar=='0'?(i+star+1):(i+1);
				midText=midText.replace(/{\$}/g,(num>10?num:'0'+num));
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
      alert("Դ�����Ѿ����Ƶ������壡");       
	});
}