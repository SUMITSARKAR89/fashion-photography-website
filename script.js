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