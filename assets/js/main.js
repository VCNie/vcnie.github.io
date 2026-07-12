/*
=================================
VCNie Website JavaScript
Apple Style Interaction
=================================
*/


/* =========================
   深色模式
========================= */


const themeButton =
document.getElementById("theme");


// 读取用户设置

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

}



// 点击切换

if(themeButton){

themeButton.onclick=function(){


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


};


}





/* =========================
   滚动导航栏效果
========================= */


const navbar =
document.querySelector(".navbar");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){


    navbar.style.width="85%";


    navbar.style.top="10px";



}else{


    navbar.style.width="90%";


    navbar.style.top="20px";


}



});







/* =========================
   滚动出现动画
========================= */


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

threshold:.15

}

);




document
.querySelectorAll(".card")
.forEach(
(card)=>{


card.classList.add(
"hidden"
);


observer.observe(card);


});
