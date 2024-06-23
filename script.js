// #open-btn
// #mobile-nav
// #close-btn

const openBtn = document.getElementById("open-btn");
const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("close-btn");

// console.log(openBtn, mobileNav)

closeBtn.addEventListener("click", () => {
    mobileNav.style.display = "none";  
})
openBtn.addEventListener("click", () => {
    mobileNav.style.display = "block";
    mobileNav.style.top = "0"
})



// ----------------------image-------------- 




/* accordion*/
const item = document.getElementsByClassName("accordion");
// console.log(item);
const show = document.getElementsByClassName("show");
const hide = document.getElementsByClassName("hide");

for( let i = 0; i<item.length; i++){
    item[i].addEventListener("click", function myAcc(){
       let accResult = item[i].classList.toggle("active");

       if(accResult == true){
        show[i].style.display = "none";
        hide[i].style.display = "block";
       }else{
        show[i].style.display = "block";
        hide[i].style.display = "none";
       }
    })
    
}
