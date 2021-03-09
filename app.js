var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d'); //rajzolási kontextus (lehet 3d is)
context.fillStyle = 'red'; //alakzat kitöltőszíne
context.fillRect(175,100,100,100); //négyszög rajzolása (bal felső sarok x,y koordinátája, szélesség, magasság)

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

context.fillRect(50,50,canvasWidth-100,canvasHeight-100);