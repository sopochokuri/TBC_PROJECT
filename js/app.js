window.onscroll = function() {myFunction()};
      
var header = document.getElementById("Myheader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    
    // document.getElementById("Myheader").style.background = "#212121";
    document.getElementById("Myheader").style.opacity = "0.94";
    
  } else {
    header.classList.remove("sticky");
    document.getElementById("Myheader").style.opacity = "10";
  }
  
}