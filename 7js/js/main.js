
//OnClick
function display(){
    document.getElementById('show').innerHTML='<h2>PENGPENG!</h2>';
}
function blue(){
    document.getElementById('show').innerHTML='<h2 style=color:blue;>PENGPENG!</h2>';

}
function erase(){
    document.getElementById('show').innerHTML=''

}

// 溫度轉換器
function converter(degree){
    document.getElementById("output").innerHTML=degree*(9/5)+32;
}

//
function select(){
    var x = document.getElementById("dropdown").value;
    document.getElementById("show").innerHTML="你選擇的是:"+ x ;
    document.getElementById("image").src = "img/"+ x +".png"



}