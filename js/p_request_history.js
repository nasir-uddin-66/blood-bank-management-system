// Check if the user is logged in
// If not, redirect to the login page;

let isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn != "true") {
  window.location.href = "p_login.html";
}

document.getElementById("pWelcome").innerText = "Welcome Patient";

// sample data will be replaced by backend data
const sampleData = [
  {
    date: "20-03-2025",
    bloodGrp: "A+",
    quantity: "500",
    reason: "dengue",
    status: "pending",
  },

  {
    date: "22-04-2023",
    bloodGrp: "A-",
    quantity: "1000",
    reason: "dengue",
    status: "rejected",
  },

  {
    date: "20-03-2023",
    bloodGrp: "O+",
    quantity: "800",
    reason: "surgery",
    status: "accepted",
  },
];

window.onload = function () {
  let tBody = document.querySelector("#pHistoryTable");
  tBody.innerHTML = "";

  sampleData.forEach((data) => {
    let row = document.createElement("tr");

    row.innerHTML = `
            <td>${data.date}</td>
            <td>${data.bloodGrp}</td>
            <td>${data.quantity}</td>
            <td>${data.reason}</td>
            <td>${data.status}</td>
        `;

    tBody.appendChild(row);
  });
};
