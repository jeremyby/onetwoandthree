var q1 = '“斯美丽蜜月之地是法国吗？”\n\nnote: yes-确定,no-取消，下同';
var q2 = '“斯美丽有耳洞吗？”';
var q3 = '“斯美丽低于60公斤吗？”';

var a1 = false;
var a2 = true;
var a3 = true;

var t_line = '请判断以下叙述是否正确:\n\n';

function start_quiz() {
    document.getElementById('show_res').style.display='none';

    var c1 = confirm('为了证明你是自己人, '+t_line + q1);
    if (c1==a1) {
        var c2 = confirm(t_line + q2);
        
        if (c2==a2) {
            var c3 = confirm(t_line + q3);
        
            if (c3==a3) {
                quiz_ok();
                return null;
            }
        }
    }
    
    quiz_fail();
}

function quiz_ok() {
    document.getElementById('res').innerHTML="<ul style='list-style: none;'><li>减肥至55公斤</li><li>考GMAT</li><li>了解国际政局</li><li>每周至少游泳一次</li><li>出门旅行一次且飞行时间至少3小时</li><li>考出OW</li></ul>"

    document.getElementById('res').innerHTML+="<a href='javascript: void(0);' onclick='hide_quiz()'>hide it</a>";
    document.getElementById('res').style.display='block';
}

function quiz_fail() {
    document.getElementById('res').innerHTML='<strong>答错了,请联系斯美丽...</strong>';
    document.getElementById('res').style.display='block';
}

function hide_quiz() {
    document.getElementById('show_res_a').onclick = function (){document.getElementById('show_res').style.display='none';document.getElementById('res').style.display='block'; };
    document.getElementById('show_res').style.display='block';
    document.getElementById('res').style.display='none';
}