
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(num) {
    showSlides(slideIndex += num);
}

function currentSlide(num) {
    showSlides(slideIndex = num);
}


function showSlides(num) {
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slides");
      let dots = document.getElementsByClassName("dot");

      // hide for each slide
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }

      // +1 for each 5 sec
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }    

      // removing the active slide
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      // set active block & slide
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 5000); 
    }
}
