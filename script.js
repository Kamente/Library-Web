
var user = {
    username: "Justin",
    password: "justin"
  };
  

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
  

    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
  

    if (usernameInput === user.username && passwordInput === user.password) {
      displayMessage("Login successful!", "success");
      window.location.href = "./dash.html";

    } else {
      displayMessage("Incorrect username or password. Please try again.", "error");
    }
  });
  
  function displayMessage(message, messageType) {
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add(messageType);
    var loginContainer = document.querySelector(".login-container");
    loginContainer.appendChild(messageElement);

    setTimeout(function() {
      messageElement.remove();
    }, 3000);
  }
  