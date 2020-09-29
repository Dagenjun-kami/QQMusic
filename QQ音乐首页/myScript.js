var topBtn=document.getElementById('topBtn');
var timer;
topBtn.onclick=function(){
    timer=setInterval(function(){
        var to_top_value=document.body.scrollTop||document.documentElement.scrollTop;
        console.log(to_top_value)
        document.body.scrollTop=document.documentElement.scrollTop=to_top_value-10;
    },10)
}