var xhr = new XMLHttpRequest();

xhr.onload = function() {
    responseObject.JSON.parse(xhr.responseText);
    var pleasework = document.getElementById("pleasework");
    
    var newContent = '';
    for (var i = 0; i < responseObject.pageData.length; i++) {
        newContent += '<div class="desc">';
        newContent += '<h2>' + data.pageData[i].desc + '</h2>';
        newContent += '<p>' + data.pageData[i].desc + '</p>';
        newContent += '</div>';
    }
    
}
 
xhr.open('GET', "https://github.com/thekaysev/final/blob/master/data/final.JSON", true);
xhr.send(null);





