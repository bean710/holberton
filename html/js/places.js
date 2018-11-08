document.addEventListener("DOMContentLoaded", function(event){
  var cat3 = document.getElementById("smart_thumbnail3");
  cat3.addEventListener("click", function() {
    if (cat3.classList.contains("article-pic")) {
      cat3.className = "article-pic-big";
    } else {
      cat3.className = "article-pic";
    }
  });

  var cat4 = document.getElementById("smart_thumbnail4");

  cat4.addEventListener("click", function() {
    if (cat4.classList.contains("article-pic")) {
      cat4.className = "article-pic-big";
    } else {
      cat4.className = "article-pic";
    }
  });

  var cat5 = document.getElementById("smart_thumbnail5");

  cat5.addEventListener("click", function() {
    if (cat5.classList.contains("article-pic")) {
      cat5.className = "article-pic-big";
    } else {
      cat5.className = "article-pic";
    }
  });

});
