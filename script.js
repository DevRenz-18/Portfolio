let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
function skillbtn1() {
    skill1.classList.toggle("openskill");
    skill2.classList.remove("openskill");
    skill3.classList.remove("openskill");
}
function skillbtn2() {
    skill2.classList.toggle("openskill");
    skill1.classList.remove("openskill");
    skill3.classList.remove("openskill");
}
function skillbtn3() {
    skill3.classList.toggle("openskill");
    skill2.classList.remove("openskill");
    skill1.classList.remove("openskill");
}
let mobilenavopen = document.getElementById("navm");
let mobilenavclose = document.getElementById("navm2");
function openSideBar() {
    mobilenavopen.classList.add("nav-mobile-show");
    document.getElementById("overlay").style.display = "block";
}
function closeSideBar() {
    mobilenavopen.classList.remove("nav-mobile-show")
    document.getElementById("overlay").style.display = "none";
}