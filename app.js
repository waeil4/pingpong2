const ball = document.getElementById('ball');
const barr1 = document.getElementById('barr_p1');
const barr2 = document.getElementById('barr_p2');
var x_ball = 30 ;
var y_ball = 30 ;
var xspeed_ball = 0.25;
var yspeed_ball = 0.25;
var x_barr1 = 5;
var y_barr1 = 40;
var yspeed_barr1_up = 2;
var yspeed_barr1_down = 2;
var y_barr2 = 40;
var x_barr2 = 5;
var yspeed_barr2_up = 2;
var yspeed_barr2_down = 2 ;
var score_p1 = 0;
var score_p2 = 0;

function animation() {
  ball.style.top = y_ball + '%';
  ball.style.left = x_ball + '%';

 
  x_ball += xspeed_ball;
  y_ball += yspeed_ball;
  if ( (x_ball == x_barr1 && y_ball>=(y_barr1 - 5) && y_ball<=(y_barr1 + 20)) ||( x_ball == 92.5 && y_ball>=(y_barr2 - 5) && y_ball<=(y_barr2+20)) ){
    xspeed_ball = -xspeed_ball;
  }
  if ( y_ball > 100 || y_ball < 0){
    yspeed_ball = -yspeed_ball;
  }

  if (x_ball < 0){
    score_p1 += 1;
    document.getElementById('score_p1').innerHTML = score_p1;
    x_ball = 80;
    xspeed_ball = xspeed_ball
  }

  if (x_ball > 100){
    score_p2 += 1;
    document.getElementById('score_p2').innerHTML = score_p2;
    x_ball = 20;
  }
  if(score_p1 == 5){
    alert("plaere 2 wins")
    score_p1 == 0
    score_p2 == 0
  }
  if(score_p2 == 5){
    alert("player 1 wims")
    score_p1 == 0
    score_p2 == 0
  }


  requestAnimationFrame(animation);
}
animation();

function barr1_up (){
    barr1.style.top = y_barr1 + '%';
    y_barr1 -= yspeed_barr1_up;
    if( y_barr1 < 0 ){
        yspeed_barr1_up = 0;
        yspeed_barr1_down = 2;
    }else{
        yspeed_barr1_up = 2;
    }
}

function barr1_down (){
    barr1.style.top = y_barr1 + '%';
    y_barr1 += yspeed_barr1_down;
    if(y_barr1 > 80 ){
        yspeed_barr1_down = 0;
        yspeed_barr1_up = 2;
    }else{
        yspeed_barr1_down = 2;
    }
}

function barr2_up (){
    barr2.style.top = y_barr2 + '%';
    y_barr2 -= yspeed_barr2_up;
    if(y_barr2 < 0){
        yspeed_barr2_up = 0;
        yspeed_barr2_down = 2;
    }else{
        yspeed_barr2_up = 2;
    }
}

function barr2_down (){
    barr2.style.top = y_barr2 + '%';
    y_barr2 += yspeed_barr2_down;
    if(y_barr2 > 80){
        yspeed_barr2_down = 0;
        yspeed_barr1_up = 2;
    }else{
        yspeed_barr2_down = 2;
    }
}

document.addEventListener("keydown",function (event) {
    if( event.key === "w"){
        document.getElementById('up_barr1').onclick();
    }
    
});

document.addEventListener( "keydown" , function(event) {
    if(event.key === "s"){
        document.getElementById('down_barr1').onclick();
    }
} );

document.addEventListener( "keydown" , function(event) {
    if(event.key === "o"){
        document.getElementById('up_barr2').onclick();
    }
} );

document.addEventListener( "keydown" , function(event) {
    if(event.key === "l"){
        document.getElementById('down_barr2').onclick();
    }
} );