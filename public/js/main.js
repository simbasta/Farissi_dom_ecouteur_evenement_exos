

//   exo1 fait 
// variable
let exo1 = document.getElementsByTagName("input")[0]
// lancement du programe
exo1.addEventListener("focus", function(){
    exo1.style.backgroundColor = "blue";
})

// ______________________________________________________________________________

//  exo2 fait 
// variable
let exo2 = document.getElementsByTagName("input")[1]
// lancement du programe
exo2.addEventListener("focus", function(){
    exo2.style.backgroundColor = "blue";
})
exo2.addEventListener("focusout", function(){
    exo2.style.backgroundColor = "";
})

// ______________________________________________________________________________

//   exo 3 fait 
// les variables
let p1 = document.getElementsByClassName("premierParagraphe")[0]
let p2 = document.getElementsByClassName("secondParagraphe")[0]
let p3 = document.getElementsByClassName("dernierParagraphe")[0]
let button = document.getElementsByClassName("buttonExo")[0]
// lancement du programe
button.addEventListener("click", function(){
    p1.innerText = p2.innerText
    p3.innerText = p2.innerText
})

// ----------------------------------------------------------------------------

//   exo4 fait
// les variables
let name12 = document.getElementById("exo4")
let input12 = document.getElementsByTagName("input")[2]
let button1 = document.getElementsByClassName("buttonExo")[1]
// lancement du programe
button1.addEventListener("click",function(){
    name12.innerText = input12.value
})

// ------------------------------------------------------------------------------

//   exo5 fait
// les variables
let p13 = document.getElementsByTagName("p")[4]
let button13 = document.getElementsByTagName("button")[2]
let img13 = document.getElementsByTagName("img")[0]
// lancement du programe
button13.addEventListener("click", function(){
    img13.src = p13.innerText.substring(9, 32)
})


// --------------------------------------------------------------------------------


//   exo6 fait
// les variables
let img14 = document.getElementsByTagName("img")[1]
// let p est une variable temporelle
let p;
let img142 = document.getElementsByTagName("img")[2]

// lancement du programe
img14.addEventListener("click",function(){
    p = img14.getAttribute("src")
})

img142.addEventListener("click", function(){
    img142.src = p
})

// ----------------------------------------------------------------------------------------------------

//    exo7 fait 
// les variables
let p15 = document.getElementsByTagName("p")[5]
let para2;
let p152 = document.getElementsByTagName("p")[6]
let button15 = document.getElementsByTagName("button")[3]

// lancement du programe
button15.addEventListener("click",function(){
    para2 = p15.innerText
    p15.innerText = p152.innerText
    p152.innerText = para2
})


