function myFunction5_1() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('アクティブなスプレッドシートは[%s]です。',ss.getName());
  
  var id = "1m2gRAsjPVkVLO4mQMGYK1DcDfiGNSfNSJz9raDlwuBw";
  
  ss = SpreadsheetApp.openById(id);
  Logger.log('ID[%s]のアクティブなスプレッドシートは[%s]です。',id,ss.getName());
  
  var sheet = SpreadsheetApp.getActiveSheet();
}

function myfunc5_2(){
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('シート1');
  Logger.log('%sを取得しました', sheet.getName());
  
  var sheets = ss.getSheets();
  Logger.log('一番左のシートは%sです', sheets[0].getName());
  
  sheet = SpreadsheetApp.getActiveSheet();
  Logger.log('現在アクティブなシートは%sです', sheet.getName());
}

function myfunc5_3(){
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  
  for(var sheet in sheets){
    Logger.log(sheets[sheet].getName());
    Logger.log(typeof sheet);
  };
  
  Logger.log(typeof sheets);
  
}

function myfunc5_3_1(){
  // for-inはvar値にobj取れないからこれではだめ
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  
  for(var sheet in sheets){
    Logger.log(sheet.getName());
  };
  
}

function myfunc5_4(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  Logger.log(sheetsLength(sheets));
}

function sheetsLength(sheets){
  return sheets.length;
}

function myfunc5_5(){
  var sheet = SpreadsheetApp.getActiveSheet();
  Logger.log(sheet.getRange('B1').getA1Notation());
  Logger.log(sheet.getRange('D4:F6').getA1Notation());
  Logger.log(sheet.getRange('2:2').getA1Notation());
  Logger.log(sheet.getRange('B:B').getA1Notation());
  
  var row=1, column=2, numRows=3, numColumns=5;
  Logger.log(sheet.getRange(row, column).getA1Notation());
  Logger.log(sheet.getRange(row, column, numRows).getA1Notation());
  Logger.log(sheet.getRange(row, column, numRows, numColumns).getA1Notation());
}

function myfunc5_6(){
  var range = getDataAdress(1,2,3,5);
  Logger.log(range);
}

function getDataAdress(row, column, numRows, numColumns){
  var sheet = SpreadsheetApp.getActiveSheet();
  return sheet.getRange(row, column, numRows, numColumns).getA1Notation();
}

function myfunc5_7(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート1");
  Logger.log('データのある範囲は%sです',sheet.getDataRange().getA1Notation());
}

function myfunc5_8(){
  var sheet    = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート2");
  var name = sheet.getRange("A2").getValue();
  var age = sheet.getRange("B2").getValue();
  Logger.log('%sの年齢は%sです',name,age);
  sheet.getRange("C2").setValue("apple"); 
}

function myfunc5_9(){
  var sheet    = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート2");
  var data = sheet.getDataRange().getValues()
  Logger.log(data);
}

function myfunc5_10(){
  var sheet    = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート2");
  var range = sheet.getRange("A3:C4");
  range.setValues([
    ["tom",32,"orange"],
    ["jay",28,"grape"]
  ]
  );
}

function myfunc5_11(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート2");
  var datas = sheet.getDataRange().getValues();
  
  //シート内のE3を起点として貼り付け
  sheet.getRange(3,5,datas.length,datas[0].length).setValues(datas);
  
  //シート３のA1を起点として貼り付け
  var sheet3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート3");
  sheet3.getRange(1,1,datas.length,datas[0].length).setValues(datas);
  
}

function myfunc5_12(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート2");
  sheet.appendRow(["ivy",24,"banana"]);
}

function myfunc5_13(){
  addData("suzuki",50,"hoge","シート2");
}

function addData(arg1,arg2,arg3,arg4){
  var sheetName = arg4.toString();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  sheet.appendRow([arg1,arg2,arg3]);
}

function myfunc5_13_1(){
  addData("suzuki",50,"hoge","シート4");
}

function addData(arg1,arg2,arg3,arg4){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(arg4);
  sheet.appendRow([arg1,arg2,arg3]);
}

function myfunc5_14(){
  var array = ["sato", 40, "something"];
  addDataArray(array,"シート2");
}

function addDataArray(arg,arg2){
  var sheetName = arg2.toString();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  sheet.appendRow(arg);
}

function myfunc5_15(){
  var obj = {name:"who", age:100, favorite:"anything"};
  addDataObject(obj,"シート2");
}

function addDataObject(arg,arg2){
  var sheetName = arg2.toString();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var data = [arg.name, arg.age, arg.favorite];
  sheet.appendRow(data);
}
