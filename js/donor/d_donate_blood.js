// check if donor is logged in
let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn != "true") {
  window.location.href = "d_login.html";
}

document.getElementById("dWelcome").innerText = "Welcome Donor";

//blood request form
document.getElementById("bd-email").value = "donor@gmail.com"; // will  be added dynamically

document.getElementById("bd-form").addEventListener("submit", (event) => {
  event.preventDefault();

  let fName = document.getElementById("bd-fName").value;
  let lName = document.getElementById("bd-lName").value;
  let age = document.getElementById("bd-age").value;
  let gender = document.querySelector('input[name="bd-gender"]:checked').value;
  let bloodGrp = document.getElementById("bd-bloodGrp").value;
  let disease = document.getElementById("bd-disease").value;
  let quantity = document.getElementById("bd-quantity").value;
  let address = document.getElementById("bd-address").value;
  let phone = document.getElementById("bd-phone").value;
  let donated = document.getElementById("bd-donated").value;
  let donationDate = document.getElementById("bd-date").value;
  let datenTime = document.getElementById("bd-datenTime").value;

  let bdDateTime = new Date(datenTime);

  // Extract the date and time separately
  const date = bdDateTime.toLocaleDateString(); // Formats the date
  const time = bdDateTime.toLocaleTimeString(); // Formats the time

  if (bloodGrp !== "Enter Blood Group") {
    if (donated == "Yes" && donationDate == "") {
      alert("Please enter last donation date!");
      return;
    }
    //will be stored in db
    console.log(`Name: ${fName} ${lName}`);
    console.log(`Age: `, age);
    console.log("Gender: ", gender);
    console.log(`Blood Group: `, bloodGrp);
    console.log(`Disease: `, disease);
    console.log(`Quantity: `, quantity);
    console.log(`Address: `, address);
    console.log(`Phone: `, phone);
    console.log(`Donated Before?: `, donated);
    console.log(`Donated Before on: `, donationDate);
    console.log(`Be present on: `, date, " at: ", time);
    alert("Blood Donation Request Submitted!");
  } else {
    alert("Input All Fields!");
  }
});
