window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var body = document.querySelector("body");
    header.classList.toggle("sticky", window.scrollY > 50);
    body.classList.toggle("changebackground", window.scrollY > 700);
    body.classList.toggle("normalbackground", window.scrollY > 2200);
})

function switchcoll(){
    var collection = document.getElementById("cat1");
    var invis = document.getElementById("cat2");
    collection.classList.add("nextcat");
    invis.classList.remove("invis");
    
}