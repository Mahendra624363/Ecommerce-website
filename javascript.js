let homebtn = document.getElementById("homebtn");
let reviewbtn = document.getElementById("reviewbtn");
let conbtn = document.getElementById("conbtn");
let homepage = document.getElementById("home");
let reviewpage = document.getElementById("review");
let conpage = document.getElementById("contact");

function homefunc() {
    reviewpage.style.display = "none";
    conpage.style.display = "none";
    homepage.style.display = "block";
}

function reviewfunc() {
    homepage.style.display = "none";
    conpage.style.display = "none";
    reviewpage.style.display = "block";
}

function confunc() {
    reviewpage.style.display = "none";
    homepage.style.display = "none";
    conpage.style.display = "block";
}

homebtn.addEventListener("click", homefunc);
reviewbtn.addEventListener("click", reviewfunc);
conbtn.addEventListener("click", confunc);
