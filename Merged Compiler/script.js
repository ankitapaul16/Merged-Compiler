function submitCode() {
    var selectedLanguage = document.getElementById('language').value;
    var code = document.getElementById('code').value;
  
    var endpoint;
    // Define the appropriate server endpoint for code submission based on the selected language
    if (selectedLanguage === 'html-css-js') {
      endpoint = '/compiler/submit-html-css-js/';
    } else if (selectedLanguage === 'python') {
      endpoint = '/compiler/submit-python/';
    } else if (selectedLanguage === 'javascript') {
      endpoint = '/compiler/submit-javascript/';
    } else if (selectedLanguage === 'cpp') {
      endpoint = '/compiler/submit-cpp/';
    } else if (selectedLanguage === 'java') {
      endpoint = '/compiler/submit-java/';
    } else if (selectedLanguage === 'php') {
      endpoint = '/compiler/submit-php/';
    } else if (selectedLanguage === 'kotlin') {
      endpoint = '/compiler/submit-kotlin/';
    } else if (selectedLanguage === 'scala') {
      endpoint = '/compiler/submit-scala/';
    }
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Process the response from the server
        var response = xhr.responseText;
        alert(response); // Display a success message or handle the response accordingly
      }
    };
    xhr.send('code=' + encodeURIComponent(code));
  }
  