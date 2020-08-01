<script src="https://blog-static.cnblogs.com/files/hellohhy/silence.min.js"></script>
<script type="text/javascript">
    //侧边栏
    $.silence({
        avatar: 'https://images.cnblogs.com/cnblogs_com/hellohhy/1752821/t_200630134233u=2621780899,3590455559&fm=26&gp=0.jpg',
        favicon: '',
        navigation: [

            {
                title: '标签',
                url: 'https://www.cnblogs.com/hellohhy/tag/'
            },
            {
                title: '归档',
                url: 'https://www.cnblogs.com/hellohhy/p/'
            },
            {
                title: '友链',
                url: 'https://www.cnblogs.com/hellohhy/p/friend.html'
            },
            {
                title: '导航',
                chilren: [
                    {
                        title: '洛谷',
                        url: 'https://www.luogu.com.cn/',
                    },
                    {
                        title: 'Latax',
                        url: 'http://latex.codecogs.com/eqneditor/editor.php',
                    },
                    {
                        title: 'vjudge',
                        url: 'https://vjudge.net/',
                    },
                    {
                        title: '数列查询',
                        url: 'http://oeis.org/',
                    },
                    {
                        title: '图论做图',
                        url: 'https://csacademy.com/app/graph_editor/',
                    },
                    {
                        title: 'markdown',
                        url: 'https://zybuluo.com/mdeditor',
                    },
               ]
            },
        ],
        catalog: {
            enable: true,
            move: true,
            index: true,
            level1: 'h1',
            level2: 'h2',
            level3: 'h3',
        },
        signature: {
            enable: true,
            license: '署名-非商业性使用-相同方式共享 4.0 国际',
            link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
            remark: null
        },
        sponsor: {
            enable: false,
            paypal: null,
            wechat: null,
            alipay: null
        },
        github: {
            enable: false,
            link: 'https://github.com/hello-hhy',
            target: '_self'
        }
    });
</script>
<script>
    //隐藏元素
    $("p").each((i, e) => { $(e).text() == "[Ctrl+Enter快捷键提交]" && $(e).css("display", "none") });
</script>
<script>
    if (location.href == "https://www.cnblogs.com/hellohhy/p/friend.html") {
        $.get("https://v1.hitokoto.cn/?c=k").then((e) => $("#zhl.sign").text(e.hitokoto))
    }
</script>

<script>
//一言
    if ($("#blog-news").length) {
        $("#blog-calendar").after('<h3 id="yiyan" style="position:relative;text-align:left;margin:10px 0px;padding-left:15px;font-size:20px;font-weight:300;border-bottom:none ">一言（ヒトコト）</h3> <div style="font-size: 15px; line-height:1.5em ; display: none; " id="hitokoto-content"><a>一言加载中。。。</a></div><div style="text-align: right; margin-top: 10px; font-size:15px; color: #666; display: none; " id="hitokoto-from"></div>');
    }
    $.get('https://v1.hitokoto.cn/?c=d&c=e&c=j&c=h', function (data) {
        if (typeof data === 'string') data = JSON.parse(data);
        $('#hitokoto-loader').removeClass('active');
        $('#hitokoto-content').css('display', '').text(data.hitokoto);
        if (data.from) {
            $('#hitokoto-from').css('display', '').text('——' + data.from);
        }
    });
</script>


<div style = "display:none;">动态线条</div>
<script>
//动态线条
!function(){
	function n(n,e,t){
		return n.getAttribute(e)||t
	}
	function e(n){
		return document.getElementsByTagName(n)
	}
	function t(){
		var t=e("script"),o=t.length,i=t[o-1];
		return{
			l:o,z:n(i,"zIndex",-1),o:n(i,"opacity",.5),c:n(i,"color","0,0,0"),n:n(i,"count",99)
		}
	}
	function o(){
		a=m.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
		c=m.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight
	}
	function i(){
		r.clearRect(0,0,a,c);
		var n,e,t,o,m,l;
		s.forEach(function(i,x){
			for(i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>a||i.x<0?-1:1,i.ya*=i.y>c||i.y<0?-1:1,r.fillRect(i.x-.5,i.y-.5,1,1),e=x+1;e<u.length;e++)n=u[e],
				null!==n.x&&null!==n.y&&(o=i.x-n.x,m=i.y-n.y,
						l=o*o+m*m,l<n.max&&(n===y&&l>=n.max/2&&(i.x-=.03*o,i.y-=.03*m),
						t=(n.max-l)/n.max,r.beginPath(),r.lineWidth=t/2,r.strokeStyle="rgba("+d.c+","+(t+.2)+")",r.moveTo(i.x,i.y),r.lineTo(n.x,n.y),r.stroke()))
		}),
		x(i)
	}
	var a,c,u,m=document.createElement("canvas"),
	d=t(),l="c_n"+d.l,r=m.getContext("2d"),
	x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||
	function(n){
		window.setTimeout(n,1e3/45)
	},
	w=Math.random,y={x:null,y:null,max:2e4};m.id=l,m.style.cssText="position:fixed;top:0;left:0;z-index:"+d.z+";opacity:"+d.o,e("body")[0].appendChild(m),o(),window.onresize=o,
	window.onmousemove=function(n){
		n=n||window.event,y.x=n.clientX,y.y=n.clientY
	},
	window.onmouseout=function(){
		y.x=null,y.y=null
	};
	for(var s=[],f=0;d.n>f;f++){
		var h=w()*a,g=w()*c,v=2*w()-1,p=2*w()-1;s.push({x:h,y:g,xa:v,ya:p,max:6e3})
	}
	u=s.concat([y]),
		setTimeout(function(){i()},100)
}();
</script>
<div style = "display:none;"> 动态线条end</div>


<script>
//改进点击锚点
$(".esa-anchor").click(() => {
setTimeout(()=>{$("html").scrollTop($("html").scrollTop() - 60)},3)
})
</script>
 <script>
function showdiv(){
if($("#sidebar_scorerank").css("display")=='none'){
$("#sidebar_scorerank").css("display","block");}}
</script>