function validateRegisterForm() {
    // Get the input values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Validate the inputs (you can add more validation logic if needed)
    if (username.trim() === "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
    }
  
    if (password.trim() === "") {
      alert("Please enter your password.");
      return false;
    }
  
    // All inputs are valid, you can proceed with form submission
    return true;
  }
  
  
  function validateLoginForm() {
    var email = document.getElementById("useremail").value;
    var password = document.getElementById("userpassword").value;
  
    // Perform validation logic
    if (email.trim() === "") {
      alert("Please enter your email");
      return false;
    }
  
    if (password.trim() === "") {
      alert("Please enter your password");
      return false;
    }
  
    // If all validations pass, you can submit the form or perform any other necessary actions
    return true;
  }