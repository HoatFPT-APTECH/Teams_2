var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides,5000); // Change image every 5 seconds
}
function mo(a){
    var m=document.getElementsByClassName("drink")
    if(a!=1) {
        document.getElementById("unnone").style.display = 'none';
        for (var i = 0; i < m.length; i++) {
            m[i].style.display = "none"
        }
        m[a-2].style.display = "block";
    }
    else{
        for (var i = 0; i < m.length; i++) {
            m[i].style.display = "none"
        }
        document.getElementById("unnone").style.display="block"
    }

}