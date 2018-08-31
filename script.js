$(function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    var ch = 75;
    var cw = 225;
    
    context.beginPath();
    context.moveTo(cw,ch) ;
    context.lineTo((canvas.width/18)*5,cw);
    context.lineTo(canvas.height+(canvas.width/18),cw);
    context.lineTo(cw,ch);
    context.strokeStyle = "gray";
    context.stroke();
    context.fillStyle = 'orange';
    context.fill();
    });