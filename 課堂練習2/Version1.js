//基本資料型態 & 變數
/* (1) 可包數字,字串,布林值 
   (2) 變數可英文大小寫/數字/$/_的組合 但開頭不能是數字  */

document.write("MERCIKTN");
document.write("<br/>");

var my_name ="uutie";
var my_age ="23";
var is_female ="true";
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

//數字 & 數字的用法
var number = 5.5;
document.write((2+3)*number);
document.write(Math.abs(number)); //取絕對值
document.write(Math.max(2,3,55,11,number)); //大小寫有影響
document.write(Math.round(number));//四捨五入
document.write(Math.pow(2,3));//2的三次方 , sqrt():開根號
document.write(Math round((Math.random * 10));

