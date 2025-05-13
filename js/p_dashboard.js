// Check if the user is logged in
// If not, redirect to the login page;

let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn != "true") {
  window.location.href = "p_login.html";
}

document.getElementById("pWelcome").innerText = "Welcome Patient";

document.getElementById("made-req").innerText = 0;
document.getElementById("pen-req").innerText = 0;
document.getElementById("app-req").innerText = 0;
document.getElementById("rej-req").innerText = 0;

