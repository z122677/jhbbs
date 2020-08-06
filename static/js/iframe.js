document.writeln("<!--    左侧边栏-->");
document.writeln("<div class=\'ui very sidebar inverted vertical menu\'>");
document.writeln("    <div class=\'ui m-margin-top-large-blog\'>");
document.writeln("        <buttom class=\'item\'><img class=\'ui centered small circular image\' src=\'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1674890653,2561905300&fm=26&gp=0.jpg\'></buttom>");
document.writeln("    </div>");
document.writeln("    <div class=\'ui basic center aligned segment\'>");
document.writeln("        <h2 class=\'item typo-h1\'>");
document.writeln("            江淮bbs");
document.writeln("        </h2>");
document.writeln("    </div>");
document.writeln("    <div class=\'ui inverted segment\'>");
document.writeln("        <div class=\'ui inverted accordion\'>");
document.writeln("            <div class=\'title active\' style=\'font-size: 1.2em!important;\'><i class=\'dropdown icon\'></i> 校园模块</div>");
document.writeln("            <div class=\'content active\'>");
document.writeln("                <a class=\'item\' href=\'new.html\'>");
document.writeln("                    新生入驻");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    校园动态");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    杂谈");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    招聘栏目");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    活动组织");
document.writeln("                </a>");
document.writeln("            </div>");
document.writeln("            <div class=\'title m-margin-top-small\' style=\'font-size: 1.2em!important;\'><i class=\'dropdown icon\'></i> 信息快讯 </div>");
document.writeln("            <div class=\'content\'>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    兼职相关");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    房屋宿舍");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    跳蚤市场");
document.writeln("                </a>");
document.writeln("            </div>");
document.writeln("            <div class=\'title m-margin-top-small\' style=\'font-size: 1.2em!important;\'><i class=\'dropdown icon\'></i> 人文艺术 </div>");
document.writeln("            <div class=\'content\'>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    原创地带");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    外语交流");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    考研专区");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    其他");
document.writeln("                </a>");
document.writeln("            </div>");
document.writeln("            <div class=\'title m-margin-top-small\' style=\'font-size: 1.2em!important;\'><i class=\'dropdown icon\'></i> 飞扬青春 </div>");
document.writeln("            <div class=\'content\'>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    爱好交流");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    小伙伴散落聚集地");
document.writeln("                </a>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    单身男女俱乐部");
document.writeln("                </a>");
document.writeln("            </div>");
document.writeln("            <div class=\'title m-margin-top-small\' style=\'font-size: 1.2em!important;\'><i class=\'dropdown icon\'></i> 站务 </div>");
document.writeln("            <div class=\'content\'>");
document.writeln("                <a class=\'item\'>");
document.writeln("                    江淮站务");
document.writeln("                </a>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("");
document.writeln("<!--置顶按钮-->");
document.writeln("<div id=\'toolbar\' class=\'m-padded m-fixed m-right-bottom\'>");
document.writeln("    <div class=\'ui vertical icon buttons\'>");
document.writeln("        <div id=\'toTop\' class=\'ui icon black button m-margin-top-large-blog\'><i class=\'big angle double up icon\'></i></div>");
document.writeln("    </div>");
document.writeln("</div>");
document.writeln("<footer class=\'ui vertical segment m-padded-tb-massive m-opacity-nav m-margin-top-large\' style=\'background-color: white\'>");
document.writeln("    <div class=\'ui center aligned container\'>");
document.writeln("        <h3 class=\'typo-h3\'>江淮BBS<i class=\'heartbeat icon\'></i> </h3>");
document.writeln("        <p id=\'hitokoto\' class=\'typo-p m-margin-bottom\'>:D 获取中...</p>");
document.writeln("        <a href=\'#\' style=\'color: #333333\' class=\'m-margin-top typo-p\'>联系开发者</a>");
document.writeln("    </div>");
document.writeln("</footer>");

$(function () {
    auth()
});

$(' .ui.sidebar')
    // .sidebar({
    //     context: $(' .bottom.segment')
    // })
    .sidebar('setting',{
        dimPage             : false,
        transition          : 'uncover',
        mobileTransition    : 'uncover'
    })
    .sidebar('attach events', '.m-item')
;
$(document).ready(function(){
    $('.accordion').accordion({duration:'click'});
});
$('.progress').progress();
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var data = JSON.parse(xhr.responseText);
        var hitokoto = document.getElementById('hitokoto');
        hitokoto.innerText = data.hitokoto;
    }
};
xhr.send();
// 置顶按钮

let waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
        if(direction == 'down'){
            $('#toolbar').show(200);
        } else {
            $('#toolbar').hide(500);
        }

    }
});
let waypoint1 = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function(direction) {
        if(direction == 'down'){
            $('#menu').show(200);
        } else {
            $('#menu').hide(500);
        }

    }
});

$('#toTop').click(function () {
    $(window).scrollTo(0,500);
});
