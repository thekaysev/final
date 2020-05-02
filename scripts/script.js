function displayPage(data) { // Run when JSON loads
    var newContent = ''; // Variable to hold HTML
   
      // For loop to loop through the data file
      for (var i = 0; i < data.pageData.length; i++) { 

        // Textbook buying info, ISBN, etc.
        newContent += '<div>';
        newContent += data.pageData[i].desc;
        newContent += '</div>';
      }
  
      // Update the page with the new content
      document.getElementById('content').innerHTML = newContent;
  }