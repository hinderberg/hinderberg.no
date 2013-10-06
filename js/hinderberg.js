(function(doc, win) {  
  
  var oldStuffList = doc.getElementById('old-stuff-list'),
  	oldStuffTitle = doc.getElementById('old-stuff-title'),
  	originalTitle = oldStuffTitle.innerHTML;
  
  oldStuffList.style.display = "none";
  oldStuffTitle.innerHTML = '<a href="#">More old stuff...</a>';
  
  oldStuffTitle.onclick = function(e) {
	  e.preventDefault();
	  oldStuffTitle.innerHTML = originalTitle;
	  oldStuffList.style.display = "block";
  }

})(document, window);
