// alert("阿囉哈!"); 彈跳視窗

//基本資料型態 & 變數
/* (1) 可包數字,字串,布林值 
   (2) 變數可英文大小寫/數字/$/_的組合 但開頭不能是數字  */

document.write(" =========  基本練習 ฅ՞•ﻌ•՞ฅ ========="); document.write("<br/>");
var my_name ="uutie";var my_age ="23";var is_female ="true";
document.write("有個人叫"+ my_name +"，");
document.write("今年" + my_age +"歲");
document.write("<br/>");

var s1="今年是" ; var date=new Date() ; var year=date.getFullYear();
document.write(s1 + "/" + date + "/" + year);
document.write("<br/>");

var s2="今年" ; var age2=year-"1998"; //上方var有定義year,所以這邊Var可抓下來
document.write(s2+age2+"歲");
document.write("<br/>");
/* 用 document.getElementById("#").innerHTML="write"也行
   HTML上made標籤(script之前),定義ID     */  

//DOM 範例
document.getElementById("example").innerHTML= s1+date+year+"<br>"+s2+age2;
document.getElementById("domtest").innerHTML="用JS改變HTML";


//字串 & 用法 
var phrase = "hello\" kitty !"; /* 若要加上"前面要多加\ */
var text=" "+"(๑• . •๑)";
document.write( phrase + text);
/* phrase.length:字串長度
touppercase():全變大寫 / tolowercase() 
charat(1):從第0位開始算的字母 / indexof():填字元找到第幾位 /
substring(0,2):顯示從第0位到第二位的字母 */ 


document.write("<br/>");
document.write(" =========  運算 ฅ՞•ﻌ•՞ฅ ========="); document.write("<br/>");
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
document.write(" =========  計算機 ฅ՞•ﻌ•՞ฅ ========="); document.write("<br/>");
//製作一個基本計算機
// var num1 = prompt("請輸入數字1");
// var num2 = prompt ("請輸入數字2");
// num1 = parseFloat(num1); //將字串轉成數字 若要小數點則為parsefloat
// num2 = parseFloat(num2);
// document.write(num1 + num2);
// document.write("<br/>");


document.write(" =========  陣列 ฅ՞•ﻌ•՞ฅ =========="); document.write("<br/>");
//陣列array
var score = [80,50,44,9,12] //也可以直接指定順序 score[0]=20
document.write(score[0]); 
document.write("<br/>");
var friend = ["小吳","小安","小莉"]; //變數的文字需加"
document.write(friend); //可加.length得知變數有幾個


document.write("<br/>");
document.write(" =========  函式 ฅ՞•ﻌ•՞ฅ ========="); document.write("<br/>");
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



   document.write("<br/>");
   document.write(" =========  if判斷 ฅ՞•ﻌ•՞ฅ ========="); document.write("<br/>");
   //if判斷
   /* 1. 打分數系統 */

   var score = prompt("[打分數系統] 請輸入您的分數")
   if(score>=90){
      alert("您獲得A!");
   }
   else if (score<90 && score>=80){
      alert("您獲得B!");
   }
   else if (score<80 && score>=70){
      alert("您獲得C!");
   }
   else if (score<70 && score>=60){
      alert("您獲得D!");
   }
   else{
      alert("bye!!!!");
   }


   /* 2. 如果今天下雨我就開車去上班 否則我就走路上班 */

    
   var rainy = false;
   if(rainy){
      document.write("我就開車去上班");
   }
   else{
      document.write("我就走路去上班");
   }

   document.write(" / ")

   /* 3. 如果你考試100分 我給你1000元 
      或是如果 你考80分以上 我給你500元
      或是如果 你考60分以上 我給你100元
      否則 你給我300元  */

    var score=50;
    if(false==100){
      document.write("我給你1000元");
    } //等於等於為判斷2邊的值有無相等
    else if(score>=80){
      document.write("我給你500元");
    }
    else if(score>=60){
      document.write("我給你100元");
    }
    else{
      document.write("你給我300元");
    }

    document.write(" / ")

   /* 4. 如果你考100 且 今天下雨,我給你1000元;否則,你給我100元 */
   var score = 100;
   var rainy = false;

   if(score==100 && rainy){
      document.write("我給你1000元")
   }
   else{
      document.write("你給我100元")
   }

   document.write(" / ")

   /* 5. 如果你考100分 或 今天下雨,我給你1000元;否則,你給我100元 */
   //其中一邊成立即可
   var score = 80;
   var rainy = true;

   if(score==100 || rainy){
      document.write("我給你1000元")
   }
   else{
      document.write("你給我100元")
   }

   document.write(" / ")

   /* 6. 如果你考100分 或 今天沒有下雨,我給你1000元;否則,你給我100元 */
    //加驚嘆號會變反面
   var score = 80;
   var rainy = true;
   
   if(score==100 || !rainy){
      document.write("我給你1000元")
   }
   else{
      document.write("你給我100元")
   }

   document.write(" / ")


   /* 判斷最大數 */
   function max_num(num1,num2,num3){
      if(num1>=num2 && num1>=num3){
         return num1;
      }
      else if(num2>=num1 && num2>=num3){
         return num2;
      }
      else {
         return num3;
      }
   }

      document.write(max_num(18,5,2));

   document.write("<br/>"); document.write(" ========= 物件 ฅ՞•ﻌ•՞ฅ ========="); document.write("<br/>");   
   //object 可以用來打生活中物件  

    var movie = {
      title:"刻在你心底的名字",
      maker:"氧氣電影",
     duration:114,
     actors:[
      {
         name:"陳昊森",
         age:24,
         is_male:true
      },
      {
         name:"曾敬驊",
         age:23,
         is_male:true
      }
     ]
     
    };
    document.write(movie.title + "/"); document.write(movie.actors[0].name);


    document.write("<br/>"); document.write(" ========= 迴圈 ฅ՞•ﻌ•՞ฅ ========="); document.write("<br/>");   
    //While  成立才執行迴圈直到False
   
    var i = 1 ;
    while(i<=3){
      document.write(i+"/");
      i=i+1; //改i++也是+1的意思
    }
    document.write("<br/>");
    /* 另一種執行方法 */
    var i=1
    do{
      document.write(i+"/");
      i++
    }while(i<=3)

   

 

   

