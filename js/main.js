/*!
 * 修改价格javascript主程序 v1.0
 * 请在jQuery环境下执行
 *
 * Copyright GZL International Travel Sevice Ltd.
 *
 * Date: Sat May 25 2013
 * Writen by jamieTsang 331252914@qq.com 
 */
var search = (document.location.search.match(/codeMode=(\w+)/) || [null,"codeRepeater"])[1];
//console.log(search);
$('#codeSelect').change(function () {
    var selected = $(this).children('option[selected=selected]').val();
    document.location.search = 'codeMode='+ selected;
})
var codeRepeaterHTML=[
'<p>线路源代码：(“{$}”代表双位数序号，例如01、02、03...)</p>',
	'<textarea id="rawTop" rows="5"></textarea>',
	'<p>&lt;!-- {line#0} --&gt;</p>',
	'<textarea id="rawText" rows="13"></textarea>',
	'<p>&lt;!-- {/line#0} --&gt;</p>',
	'<textarea id="rawBot" rows="5"></textarea>',
	'<div>',
		'从<input class="number" type="number" id="star" value="0"/>开始,到',
		'<input class="number" type="number" id="end" value="1"/>结束。',
		'{$}是否从01开始？<select id="dollarStar">',
			'<option value="0" selected="selected">否</option>',
			'<option value="1">是</option>',
		'</select>',
		'<button id="generate">执行</button>',
        '</div>'
];
var now = new Date();
//var time0 = ;
function TimeSetting(i) {
    this.id=i;
    this.year = $('#timeSetting_' + i + ' #year').val();
    this.month = ($('#timeSetting_' + i + ' #month').val()-1);
    this.date = $('#timeSetting_' + i + ' #date').val();
    this.hour = $('#timeSetting_' + i + ' #hour').val();
    this.minute = $('#timeSetting_' + i + ' #minute').val();
    this.second = $('#timeSetting_' + i + ' #second').val();
}
TimeSetting.prototype.generateHTML = function () {
    //this.id
    var html = [
    '<div class="timeSettingCont timeCont">',
    '<p>时间ID：'+this.id+'</p>',
    '<p><b>开抢时间：</b></p>',
    '<div id="timeSetting_' + this.id + '" class="timeSetting"><input class="number4 number" type="number" id="year" value="' + now.getFullYear() + '" onChange="checkDateMax(' + this.id + ')"/>年',
    '<input class="number2 number" type="number" id="month" min="1" max="12" value="' + (now.getMonth() + 1) + '" onChange="checkDateMax(' + this.id + ')"/>月',
    '<input class="number2 number" type="number" id="date" min="1" max="' + setMaxDate(2014, 2) + '" value="' + now.getDate() + '"/>日',
    '<input class="number2 number" type="number" id="hour" min="0" max="23" value="0"/>时',
    '<input class="number2 number" type="number" id="minute" min="0" max="59" value="0"/>分',
    '<input class="number2 number" type="number" id="second" min="0" max="59" value="0"/>秒',
    '<p>请把作用标签的类名设置为:time' + this.id + ' 例:&lt;tag class="time' + this.id + '"&gt;准备开抢&lt;/tag&gt;</p>',
    '<p>当时间到达时，作用标签会变为 例:&lt;tag class="time' + this.id + ' active"&gt;开抢时间！&lt;/tag&gt;</p>',
    '</div>',
    '</div>'
    ];
    return html.join('');
}
var timeSettingHTML = [
    '<p>请在jQuery环境下执行 code:&lt;script src="/Static/scripts/jquery-1.7.2.min.js" type="text/javascript"&gt;&lt;/script&gt;</p>',
    new TimeSetting(0).generateHTML(),
    '<div class="timeCont"><a href="javascript:void(0);" onClick="addTimeSetting()">+添加一个时间点</a></div>',
    '<button onClick="timeSetting(true)">生成代码(开发)</button>',
    '<button onClick="timeSetting(false)">生成代码(压缩)</button>'
];
function addTimeSetting() {
    var timeSettingNum = $('.timeSetting').length;
    $('.timeSettingCont:last').after(new TimeSetting(timeSettingNum).generateHTML());
}
function load() {
    $('#codeSelect option[value=' + search + ']').attr('selected', true);
    switch (search){
        case "codeRepeater":
            var codeCont = {
                Raw: new GzlCookie("raw"),
                RawTop: new GzlCookie("rawTop"),
                RawBot: new GzlCookie("RawBot")
            };
            $('#lfColumn').html(codeRepeaterHTML.join(''));
            $('#rawText').text(codeCont.Raw.getCookie() || '');
            $('#rawTop').text(codeCont.RawTop.getCookie() || '');
            $('#rawBot').text(codeCont.RawBot.getCookie() || '');
            codeRepeater(codeCont);
            break;
        case "timeSetting":
            $('#lfColumn').html(timeSettingHTML.join(''));
            //timeSetting();
            break;
    }
}
function codeRepeater(object) {
    $('#generate').click(function () {
        $('#result').text();
        var star = parseInt($('#star').val());
        var end = parseInt($('#end').val());
        var topText = $('#rawTop').val();
        var midText = $('#rawText').val();
        var botText = $('#rawBot').val();
        if (star == NaN) {
            alert('请填写结束数字！');
        } else if (!(/\d+/.test(star.toString()) && /\d+/.test(end.toString()))) {
            alert('请填写数字！');
        } else if (!(star < end)) {
            alert('结束应该大于开始！');
        }
        else if (midText == '') {
            alert('源代码不能为空！');
        } else {
            var result = '';
            var dollarStar = $('#dollarStar').val();
            //console.log(this.Raw);
            object.Raw.setCookie(midText, 30);
            object.RawTop.setCookie(topText, 30);
            object.RawBot.setCookie(botText, 30);
            for (i = 0; i < (end - star + 1); i++) {
                var num = dollarStar == '0' ? (i + star + 1) : (i + 1);
                midText = midText.replace(/{\$}/g, (num > 9 ? num : '0' + num));
                result += topText + '\n<!-- {line#' + (star + i) + '} -->\n' + midText + '\n<!-- {/line#' + (star + i) + '} -->\n' + botText + '\n';
                midText = $('#rawText').val();
            }
            $('#result').text(result);
        }
    });
}
function timeSetting(isPress) {
        var result = [];
        var dateInof = [];
        $.each($('.timeSettingCont'), function (key, value) {
            dateInof.push(new TimeSetting(key));
        });
        //console.log(dateInof);
        /*var dateInof=[{
            year:$('#year').val(),
            month:($('#month').val()-1),
            date:$('#date').val(),
            hour:$('#hour').val(),
            minute:$('#minute').val(),
            second:$('#second').val()
        }];*/
        result.push('<script type="text/javascript" src="/subject/edit/js/Class.GzlGlobal.js"></script>');
        result.push('<script type="text/javascript">');
        result.push('var gDate=[');
        $.each(dateInof, function (key, value) {
            result.push('{st:new Date(' + dateInof[key].year + ',' + dateInof[key].month + ',' + dateInof[key].date + ',' + dateInof[key].hour + ',' + dateInof[key].minute + ',' + dateInof[key].second + ')}'+((key < (dateInof.length - 1))?',':''));
        });
        result.push('];');
        result.push('webDate(function (webTime){');
        result.push('   $.each(gDate,function(key,value){');
        result.push('       if((gDate[key].st- new Date(webTime).getTime())<=0){');
        result.push('           $(".time"+key).addClass("active");');
        result.push('       }');
        result.push('   })');
        result.push('});');
        result.push('</script>');
        var comment = '//基于服务器时间控制代码\n';
        if (isPress) {
            $('#result').text(comment+result.join('\n'));
        }
        else {
            $.each(result, function (key, value) { result[key] = $.trim(value); });
            $('#result').text(comment+result.join(''));
        }
}
function toClipboard() {
    var clip = new ZeroClipboard($('#copy'));
    clip.on('complete', function (client, args) {
        alert("源代码已经复制到剪贴板！");
    });
}
function setMaxDateOnload(e) {
    return setMaxDate(now.getFullYear(),now.getMonth());
}
function setMaxDate(year, month) {
    var d = new Date();
    return new Date(year, month + 1, 0).getDate();
}
function checkDateMax(n) {
    $('#timeSetting_' + n + ' #date').attr('max', setMaxDate($('#timeSetting_' + n + ' #year').val(), ($('#timeSetting_' + n + ' #month').val() - 1)));
}