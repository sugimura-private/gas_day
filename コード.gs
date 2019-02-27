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
