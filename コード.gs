function myFunction2_1() {
  var i = 2;
  var j = 3;
  if(i>j){
    Logger.log('iはjより大きい');
  }else if(i===j){
    Logger.log('iはjは等しい');
  }else{
    Logger.log('iはjより小さい');
  }
}

function myFunction2_3(){
  var x=10;
  var y=3;
  var z = x % y;
  Logger.log('%sを%sで割った余りは%sです',x,y,z);
}

function myFunction2_4(){
  var x=2;
  if(x%2===0){
    Logger.log("偶数です");
  }else{
    Logger.log("奇数です");
  }
}

function myFunction2_5(){
  var x=1, y=1;
  if(x>=10 || y>=10){
    Logger.log("どちらかが10以上");
  }else{
    Logger.log("どっちも10未満");
  }
}

function myFunction2_6(){
  if(10){
    Logger.log("trueでした");
  }
  if("hello"){
    Logger.log("Trueでした");
  }
}

function myFunction2_7(){
  //2-1で実装済み
}

function myFunction2_8(){
  var rank="未受講";
  switch(rank){
    case'優':
      Logger.log("優ですね");
      break;
    case'良':
      Logger.log('良ですね');
      break;
    case'可':
      Logger.log("可ですね");
      break;
    default:
      Logger.log("残念");
  }
}

function myFunction2_9(){
  for(var i = 1; i <= 10; i++){
    Logger.log(i);
      }
  Logger.log(i)
}

function myFunction2_10(){
  for(var i= 0, x = 0; i <= 10; i++){
    x= x+i;
  } 
  Logger.log("1から%sまで加算すると%sになります",i-1,x);
}

function myFunction2_11(){
  var i = 10;
  while(i >= -2){
    Logger.log(i);
    i=i-3;
  }
}

function myFunction2_12(){
  var x=1;
  while(x<=100){
    Logger.log(x)
    x=x*2;
  }
} 

function myFunction2_13(){
  for(var i =1; i <= 100; i++){
    if(i % 3 ===0){
      Logger.log(i);
    }
  }
}

function myFunction2_14(){
  for(var i = 1; i <= 9; i++){
    for(var j = 1; j <= 9; j++){
      Logger.log('%sX%s=%s',i,j,i*j);
    }
  }
}

function myFunction2_15(){
  for(var i=1; i <= 100; i++){
    if( i % 3 === 0 && i % 5 === 0){
      Logger.log('FizzBuzz');
    }else if(i % 3 === 0){
      Logger.log('Fizz');
    }else if(i % 5 === 0){
      Logger.log('Buzz');
    }else{
      Logger.log(i);
    }
  } 
}