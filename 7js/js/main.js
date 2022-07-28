
//OnClick
function display(){
    document.getElementById('show').innerHTML='<h4>My name is Pengsu.</h4>';
}
function blue(){
    document.getElementById('show').innerHTML='<h4 style=color:##D1844B;>Aug 8th <3</h4>';

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

// OnMouseOver

function show1() {img1.style.display="block";}
function noshow1() {img1.style.display="none";}


function show2() {img2.style.display="block";}
function noshow2() {img2.style.display="none";}


function show3() {img3.style.display="block";}
function noshow3() {img3.style.display="none";}


function show4() {img4.style.display="block";}
function noshow4() {img4.style.display="none";}
