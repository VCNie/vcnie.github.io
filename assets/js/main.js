/*
=================================
VCNie Website JavaScript
=================================
*/


/* =========================
   深色模式
========================= */


const themeButton =
document.getElementById("theme");



if(
localStorage.getItem("theme")
==="dark"
){


document.body.classList.add("dark");


}



if(themeButton){


themeButton.addEventListener(
"click",
()=>{


document.body.classList.toggle("dark");



if(
document.body.classList.contains("dark")
){


localStorage.setItem(
"theme",
"dark"
);



}else{


localStorage.setItem(
"theme",
"light"
);



}



});


}






/* =========================
   导航栏滚动
========================= */


const navbar =
document.querySelector(".navbar");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY>60){


navbar.classList.add(
"scrolled"
);



}else{


navbar.classList.remove(
"scrolled"
);



}



});







/* =========================
   卡片动画
========================= */


const cards =
document.querySelectorAll(".card");



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);



}


});


},
{

threshold:.2

}

);




cards.forEach(
(card)=>{


observer.observe(card);



});
