//基本資料型態 & 變數
/* (1) 可包數字,字串,布林值 
   (2) 變數可英文大小寫/數字/$/_的組合 但開頭不能是數字  */

document.write("MERCIKTN");
document.write("<br/>");
var my_name ="uutie";var my_age ="23";var is_female ="true";
document.write("有個人叫"+ my_name +"，");
document.write("今年" + my_age +"歲");
document.write("<br/>");
document.write(is_female);
document.write("<br/>");

//字串 & 用法 
var phrase = "hello\" kitty !"; /* 若要加上"前面要多加\ */
var text=" "+"(๑• . •๑)";
document.write( phrase + text);
/* phrase.length:字串長度
touppercase():全變大寫 / tolowercase() 
charat(1):從第0位開始算的字母 / indexof():填字元找到第幾位 /
substring(0,2):顯示從第0位到第二位的字母 */ 
document.write("<br/>");
document.write(" —————— ฅ՞•ﻌ•՞ฅ♥︎ ——————"); document.write("<br/>");

//數字 & 數字的用法
var number = 5.5;
document.write("加減乘法 : " + (2+3)*number); document.write("<br/>");
document.write("取絕對值 : " + Math.abs(number)); //取絕對值
document.write("<br/>");
document.write("大小寫 : " + Math.max(2,3,55,11,number)); //大小寫有影響
document.write("<br/>");
document.write("次方 : " + Math.pow(2,3));//2的三次方 , sqrt():開根號
document.write("<br/>");
document.write("四捨五入 : " + Math.round(Math.random() * 10)); //隨機數四捨五入成整數WS
document.write("<br/>");
document.write(" —————— ฅ՞•ﻌ•՞ฅ♥︎ ——————"); document.write("<br/>");
//製作一個基本計算機
var num1 = prompt("請輸入數字1");
var num2 = prompt ("請輸入數字2");
num1 = parseFloat(num1); //將字串轉成數字 若要小數點則為parsefloat
num2 = parseFloat(num2);
document.write(num1 + num2);
document.write("<br/>");

//陣列array
var score = [80,50,44,9,12] //也可以直接指定順序 score[0]=20
document.write(score[0]); 
document.write("<br/>");
var friend = ["小吳","小安","小莉"]; //變數的文字需加"
document.write(friend); //可加.length得知變數有幾個
document.write("<br/>");document.write(" —————— ฅ՞•ﻌ•՞ฅ♥︎ ——————"); document.write("<br/>");

//函式 function   可以想成f(X)=ax+b的概念
function hello(name,age){
   document.write("你好" + name +"你今年" + age + "歲");}
   hello("lulu","23");
   document.write("<br/>");document.write("------------" + "</br>");
function add(num1,num2){
   document.write( num1 + num2 );
   document.write("<br/>")
   return 10;
   /* 寫法二 : document.write( num1 + num2);} */
}
   value = add(3,6);
   document.write(value);
   /* document.write( add(3,6) ) or document.write(9*100+60); 
      寫法二 : add(4,6); */
   document.write("<br/>");document.write(" —————— ฅ՞•ﻌ•՞ฅ♥︎ ——————"); document.write("<br/>");

   //if判斷
   /* 1.如果肚子餓 我就去吃飯 */
   /* 2.如果今天下雨我就開車去上班 否則我就走路上班 */
   /* 3.如果你考試100分 我給你100元 
      或是如果 你考80分以上 我給你500元
      或是如果 你考60分以上 我給你100元
      否則 你給我300元  */