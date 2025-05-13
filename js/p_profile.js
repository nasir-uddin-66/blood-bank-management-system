// Check if the user is logged in
// If not, redirect to the login page;

let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn != "true") {
  window.location.href = "p_login.html";
}

document.getElementById("pWelcome").innerText = "Welcome Patient";

// user information (dynamic)

document.getElementById("p-profile-name").innerText = "User";
document.getElementById("p-profile-mail").innerText = "User@mail.com";
document.getElementById("p-profile-age").innerText = "999";
document.getElementById("p-profile-bloodGrp").innerText = "C+";
document.getElementById("p-profile-address").innerText =
  "Sector-10, Uttara, Dhaka";
document.getElementById("p-profile-phone").innerText = "+8801234567896";

// update information
const pInfoUpdate = document.getElementById("pInfoUpdate");

pInfoUpdate.addEventListener("click", () => {
  document.getElementById("profile-box1").style.left = "-800px";
  document.getElementById("profile-box2").style.left = "-220px";
});

// cancel - goes back to user info
document.querySelector(".cancelBtn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("profile-box1").style.left = "200px";
  document.getElementById("profile-box2").style.left = "800px";
});

// update info (dynamic)
let pUpdateEmail = document.querySelector("#pUpdateEmail");
pUpdateEmail.value = "patient@gmail.com"; // will  be added dynamically

document.querySelector("#pUpdateForm").addEventListener("submit", (e) => {
  e.preventDefault();

  let pUpdateUsername = document.querySelector("#pUpdateUsername").value;
  let pUpdateAge = document.querySelector("#pUpdateAge").value;
  let pUpdateBloodGrp = document.querySelector("#pUpdateBloodGrp").value;
  let pUpdateAddress = document.querySelector("#pUpdateAddress").value;
  let pUpdatePhone = document.querySelector("#pUpdatePhone").value;

  if (
    pUpdateUsername !== "" &&
    pUpdateAge !== "" &&
    pUpdatePhone !== "" &&
    pUpdateAddress !== "" &&
    pUpdateBloodGrp !== "Enter Blood Group"
  ) {
    document.getElementById("p-profile-name").innerText = pUpdateUsername;
    document.getElementById("p-profile-mail").innerText = pUpdateEmail.value;
    document.getElementById("p-profile-age").innerText = pUpdateAge;
    document.getElementById("p-profile-bloodGrp").innerText = pUpdateBloodGrp;
    document.getElementById("p-profile-address").innerText = pUpdateAddress;
    document.getElementById("p-profile-phone").innerText = pUpdatePhone;
    alert("Information Updated!");
    document.getElementById("profile-box1").style.left = "200px";
    document.getElementById("profile-box2").style.left = "800px";
  } else {
    alert("Input all the fields!");
  }
});
