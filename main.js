function login() {
    var fullName = document.getElementById('fullName').value;
    if (fullName.trim() === '') {
      alert('Please enter your full name.');
    } else {
      var welcomeMessage = 'Welcome, ' + fullName + '!';
      // Display a popup window with the welcome message
      window.alert(welcomeMessage);
    }
  }