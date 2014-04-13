<%@ Page Language="C#" ContentType="text/html" ResponseEncoding="UTF-8" Debug="true" %>

<%@ Import Namespace="System" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8" />
    <title>代码生成页</title>
    <link rel="stylesheet" href="/subject/edit/css/bootstrap.css">
    <script src="/Static/scripts/jquery-1.7.2.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="/subject/edit/codeRepeater/js/ZeroClipboard.min.js"></script>
    <script>        ZeroClipboard.setDefaults({ moviePath: 'js/ZeroClipboard.swf' });  </script>
    <script type="text/javascript" src="/subject/edit/js/Class.GzlGlobal.js"></script>
    <style type="text/css">
        <%--body
        {
            font-size: 13px;
        }
        h1
        {
            background: #00EBFF;
            margin: 8px 0;
        }
        i, cite, em, var, address, dfn
        {
            font-style: italic;
        }
        i
        {
            font-size: 18px;
        }--%>
        .codeRepeater
        {
            font-family: SimSun,"Helvetica Neue", sans-serif;
            font-size: 12px;
            line-height: normal;
            }
        .codeRepeater .navbar
        {
            font-family: "Helvetica Neue", Helvetica, Arial,"Microsoft YaHei", sans-serif;
            font-size: 14px;
            background: #00EBFF;
            line-height: 1.428571429;
        }
        .codeRepeater .navbar a
        {
            color:#333;
            }
         .codeRepeater .navbar-brand small
         {
             padding-left:15px;
             }
        .codeRepeater .navbar .open > a{
            background:#00C7D8
        }
                .codeRepeater .nav > li > a:hover, .nav > li > a:focus
        {   
            background:#00C7D8;
             
           }
                .codeRepeater .nav >  li > .static:hover, .nav > li > .static:focus
        {
            background:#00EBFF;
                       
            }
        .codeRepeater .nav > .active > a,.codeRepeater .nav > .active > a:hover,.codeRepeater .nav > .active > a:focus
        {   
            background:#00575F;
            color:#FFF;
         }
        .codeRepeater .navbar-toggle
         {
             border-color:#333;
             }
         .codeRepeater .navbar-toggle .icon-bar
         {
             background:#333;
             }
             .timeCont .alert
             {
                 margin-bottom:0;
            }
        .lfColumn, .rgColumn
        {
            float: left;
            width: 50%;
            padding:15px;
        }
        textarea
        {
            width: 98%;
        }
        .number
        {
            width: 40px;
        }
        .timeCont
        {
            border: 1px dashed #CCC;
            margin: 10px;
            padding: 10px;
        }
        .timeCont p
        {
           
        }
        .timeCont .number
        {
            margin: 0 5px;
        }
        .timeCont .number4
        {
            width: 45px;
        }
        .timeCont .number2
        {
            width: 30px;
        }
        .none_15
        {
            height:15px;
            }
        .alert_tips
        {
            display:none;
            }
        .alert_tips_cont
        {
            height:46px;
            margin-bottom: 20px;
            }
    </style>
</head>
<body class="codeRepeater" onload="load();">
    <nav class="navbar" role="navigation">
	  <!-- Brand and toggle get grouped for better mobile display -->
	  <div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		  <span class="sr-only">Toggle navigation</span>
		  <span class="icon-bar"></span>
		  <span class="icon-bar"></span>
		  <span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="#">代码生成页v2.1<small>(请使用现代浏览器)更新日期20140413</small></a>
        
	  </div>

	  <!-- Collect the nav links, forms, and other content for toggling -->
	  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul class="nav navbar-nav">
		  <li data-value="codeRepeater"><a href="/subject/edit/codeRepeater/default.aspx?codeMode=codeRepeater">线路代码生成</a></li>
		  <li data-value="timeSetting"><a href="/subject/edit/codeRepeater/default.aspx?codeMode=timeSetting">基于服务器时间控制</a></li>
          <li><a class="static">现在服务器时间：<% Response.Write(DateTime.Now.ToString("F")); %></a></li>
		</ul>
	  </div><!-- /.navbar-collapse -->
	</nav>
    
    <div id="lfColumn" class="lfColumn">
    </div>
    <div class="rgColumn">
        <div class="alert_tips_cont"><div id="alert_tips" class="alert alert-success alert_tips">程序已成功执行！</div></div>
        <p>
            结果：</p>
        <textarea id="result" rows="30"></textarea>
        <div class="none_15"></div>
        <button id="copy" class="btn btn-default" onclick="toClipboard()" data-clipboard-target="result">
            复制到粘贴板</button>
    </div>

    <script src="/subject/edit/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/subject/edit/codeRepeater/js/main.js"></script>
</body>
</html>
