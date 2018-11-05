document.addEventListener("DOMContentLoaded", function(event){
  var cat = document.getElementById("smart_thumbnail");

  cat.addEventListener("click", function() {
    if (cat.classList.contains("small")) {
      cat.className = "";
    } else {
      cat.className = "small";
    }
  });
});
