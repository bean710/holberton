document.addEventListener("DOMContentLoaded", function(event){
	var cat = document.getElementById("smart_thumbnail");

	cat.addEventListener("click", function() {
		if (cat.classList.contains("article-pic")) {
			cat.className = "article-pic-big";
		} else {
			cat.className = "article-pic";
		}
	});

	var cat2 = document.getElementById("smart_thumbnail2");

	cat2.addEventListener("click", function() {
		if (cat2.classList.contains("article-pic")) {
			cat2.className = "article-pic-big";
		} else {
			cat2.className = "article-pic";
		}
	});
});
