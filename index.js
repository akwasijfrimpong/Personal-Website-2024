let index = 0;
showSlides(slideIndex);

function next(n){
    if(index < 5){
        index = index + n;
        showSlides(index);
    }
    else{
        index = 0;
        showSlides(index);
        console.log(index);
    }


}
function prev(n){
    if(index > 0){
        index = index + n;
        showSlides(index);
    }
    else{
        index = 5;
        showSlides(index);
    }
  
}
function showSlides() {
    let slides = document.getElementsByClassName("gallery");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[index].style.display ="inline";
      

    
  }
  function about(){
    let elem = document.getElementById("aboutSection");
    elem.scrollIntoView();
  }
  function contact(){
    let elem = document.getElementById("contactSection");
    elem.scrollIntoView();
  }
  function work(){
    let elem = document.getElementById("workSection");
    elem.scrollIntoView();
  }
  function home(){
    let elem = document.getElementById("homeSection");
    elem.scrollIntoView();
  }