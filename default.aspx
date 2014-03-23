<%@ Page Language="C#" ContentType="text/html" ResponseEncoding="UTF-8" Debug="true" %>
<%@ Import Namespace="System" %>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8" />
<title>代码生成页</title>
<script src="/Static/scripts/jquery-1.7.2.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/subject/edit/codeRepeater/js/ZeroClipboard.min.js"></script>
<script>   ZeroClipboard.setDefaults( { moviePath: 'js/ZeroClipboard.swf' } );  </script> 
<script type="text/javascript" src="/subject/edit/js/Class.GzlGlobal.js"></script>
<style type="text/css">
body {
	font-size: 13px;
}
h1 {
	background: #00EBFF;
	margin: 8px 0;
}
i, cite, em, var, address, dfn {
	font-style: italic;
}
i {
	font-size: 18px;
}
.lfColumn,.rgColumn{
	float:left;
	width:50%;
}
textarea{
	width:98%;
}
.number{
	width:40px;
}
.timeCont
{
    border:1px dashed #CCC;
    margin:10px;
    padding:10px;
    }
.timeCont p
{
    margin:0;
    }
.timeCont .number
{
    margin:0 5px;
    }    
.timeCont .number4
{
    width:45px;
    }
.timeCont .number2
{
    width:30px;
    }    
</style>
</head>
<body onload="load();">
<h1>代码生成页v2.0 <i>(请使用现代浏览器)</i>更新日期20140323
<select id="codeSelect">
    <option value="codeRepeater">线路代码生成</option>
    <option value="timeSetting">基于服务器时间控制</option>
</select>
<i>现在服务器时间：<% Response.Write(DateTime.Now.ToString("F")); %></i>
</h1>
<div id="lfColumn" class="lfColumn">
	
</div>
<div class="rgColumn">
	<p>结果：</p>
	<textarea id="result" rows="30"></textarea>
	<button id="copy" onclick="toClipboard()" data-clipboard-target="result">复制到粘贴板</button>
</div>
<script type="text/javascript" src="/subject/edit/codeRepeater/js/main.js"></script>
</body>
</html>