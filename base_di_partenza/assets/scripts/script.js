window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    document.getElementById("yellowToWhite").style.backgroundColor = "white";
    document.querySelector("#greenBtn").style.backgroundColor = "#1a8917";
  } else {
    document.getElementById("yellowToWhite").style.backgroundColor = "#ffc017";
    document.querySelector("#greenBtn").style.backgroundColor = "black";
  }
});
