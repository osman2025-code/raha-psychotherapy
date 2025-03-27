let activePage=document.querySelectorAll(".page");

console.log(activePage)

function active(href){
    for(let i=0 ;i< 4 ;i++){
        if(activePage[i].href===href){
            activePage[i].classList.add("active");
        }else{
            activePage[i].classList.remove ("active");

        }

    }

};




let menuBar=document.querySelector("#menu-bar");
let amenu=document.querySelector("#nav-pages");

function showMenu(){
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}




let videos=document.querySelectorAll(".video-btn");

videos.forEach(slide=>{
    slide.addEventListener("click",function(){
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src= slide.getAttribute("data-src");
        document.querySelector("#video-slider").src=src
    })
})


