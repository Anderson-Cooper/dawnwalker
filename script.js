$(function(){
     var x = 0;
     var y = 0;
     setInterval(function(){
         x+=1;
         y-=1;
         $('body').css('background-position', x + 'px ' + y + 'px');
     }, 10);
})