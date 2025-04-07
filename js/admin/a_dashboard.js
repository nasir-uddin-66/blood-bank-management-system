let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn != "true") {
  window.location.href = "a_login.html";
}

document.getElementById("aWelcome").innerText = "Welcome Admin";

document.getElementById("made-req").innerText = 0;
document.getElementById("pen-req").innerText = 0;
document.getElementById("app-req").innerText = 0;
document.getElementById("rej-req").innerText = 0;
