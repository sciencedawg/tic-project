function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}
// HTML quiz
function resultado() {
var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

<!-- First question -->
if (document.getElementById('p11').checked==true) {p1=1}
else {p1=0}
<!-- Second question -->
if (document.getElementById('p22').checked==true) {p2=1}
else {p2=0}
<!-- Third question -->
if (document.getElementById('p33').checked==true) {p3=1}
else {p3=0}
<!-- Forth question -->
if (document.getElementById('p44').checked==true) {p4=1}
else {p4=0}
<!-- Fifth question -->
if (document.getElementById('p51').checked==true) {p5=1}
else {p5=0}
<!-- Sixth question -->
if (document.getElementById('p62').checked==true) {p6=1}
else {p6=0}
<!-- Seventh question -->
if (document.getElementById('p73').checked==true) {p7=1}
else {p7=0}
<!-- Eighth question -->
if (document.getElementById('p84').checked==true) {p8=1}
else {p8=0}
<!-- Ninth question -->
if (document.getElementById('p91').checked==true) {p9=1}
else {p9=0}
<!-- Tenth question -->
if (document.getElementById('p102').checked==true) {p10=1}
else {p10=0}

nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
alert(" Aciertos: " + nota);
location.reload();
}
