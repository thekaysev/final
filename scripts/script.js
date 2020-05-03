var xhr = new XMLHttpRequest();

xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    
    var newContent = '';
    for (var i = 0; i < responseObject.pageData.length; i++) {
        newContent += '<div class="desc">';
	newContent += '<h4>' + responseObject.pageData[i].header + '</h4>';
        newContent += '<p>' + responseObject.pageData[i].desc + '</p>';
        newContent += '</div>';
    }
	document.getElementById('pleasework').innerHTML = newContent;
    
};
 
xhr.open('GET', "https://thekaysev.github.io/final/data/final.json", true);
xhr.send(null);





