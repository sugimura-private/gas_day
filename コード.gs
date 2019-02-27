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
