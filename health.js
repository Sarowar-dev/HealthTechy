// health.js
document.addEventListener("DOMContentLoaded", function () {
    const check = document.querySelector(".check");
    const doctorMenu = document.getElementById("doctor");

    check.addEventListener("change", function () {
        if (check.checked) {
            doctorMenu.style.transform = "translateX(0)";
        } else {
            doctorMenu.style.transform = "translateX(-220px)";
        }
    });
});


document.querySelector(".login").addEventListener("click", function () {
    alert("Redirecting to login page...");
    // window.location.href = "login.html"; // Uncomment to redirect to a login page
});

document.querySelector(".signup").addEventListener("click", function () {
    alert("Redirecting to signup page...");
    // window.location.href = "signup.html"; // Uncomment to redirect to a signup page
});


const specialties = document.querySelectorAll(".doctorlist");

specialties.forEach(function (specialty) {
    specialty.addEventListener("click", function () {
        const ul = specialty.nextElementSibling;
        ul.style.display = ul.style.display === "none" ? "block" : "none";
    });
});


const emails = document.querySelectorAll("#email");

emails.forEach(function (email) {
    email.addEventListener("click", function () {
        const mailto = "mailto:" + email.textContent.trim();
        window.location.href = mailto;
    });
});
document.getElementById("ContactUsButton").addEventListener("click", function()
{
    window.location.href="tel:+918637855177";
});

// Get the modal and close button
const modal = document.getElementById("identifyModal");
const closeButton = document.querySelector(".close");

// Function to open the modal
document.querySelector(".identify").addEventListener("click", function () {
    modal.style.display = "block";
});

// Function to close the modal when clicking the "x"
closeButton.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Sample function for the "Submit" button inside the modal
function identifyIllness() {
    const symptoms = document.querySelector("#identifyModal input").value;
    if (symptoms) {
        alert("Searching for illnesses related to: " + symptoms);
        modal.style.display = "none"; // Close the modal after submission
    } else {
        alert("Please enter symptoms to proceed.");
    }
}


// Get the modal and close button
const doctorsModal = document.getElementById("doctorsModal");
const closeDoctorsButton = doctorsModal.querySelector(".close");

// Sample doctor data for each specialty
const doctorsData = {
    orthopedic: ["D. Sardar", "R. Mondal", "Lk. Mukherjee", "Vibhas Mondal", "Samim Khan"],
    cardiology: ["Naresh Trehan", "Ashok Seth", "S. K. Gupta", "K. K. Agarwal", "C. N. Makhija"],
    general: ["M. G. Alam", "Md Samsujjaman", "SK. Ghosh", "Sahid Imam Mallick", "Khairul Imam Mallick"],
    child: ["M.A. Habib", "Mustakim Laskar", "Halim Sk.", "Mariya Arjuman"],
    dental: ["Goutam Naskar", "Mosiur Rahaman Laskar", "Rakibul Molla", "Inzamul Haque", "Khairul Gazi"]
};

// Function to open the modal
document.querySelector(".doc").addEventListener("click", function () {
    doctorsModal.style.display = "block";
});

// Function to close the modal when clicking the "x"
closeDoctorsButton.onclick = function() {
    doctorsModal.style.display = "none";
};

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == doctorsModal) {
        doctorsModal.style.display = "none";
    }
};

// Function to show doctors based on selected specialty
function showDoctors() {
    const specialty = document.getElementById("specialty").value;
    const doctorListDiv = document.getElementById("doctorList");
    const doctors = doctorsData[specialty] || [];

    // Clear previous list and display selected doctors
    doctorListDiv.innerHTML = `<h3>${specialty.charAt(0).toUpperCase() + specialty.slice(1)} Doctors:</h3><ul>` +
        doctors.map(doctor => `<li>${doctor}</li>`).join('') +
        `</ul>`;
}


// Get the modal and close button
const hospitalsModal = document.getElementById("hospitalsModal");
const closeHospitalsButton = hospitalsModal.querySelector(".close");

// List of hospitals
const hospitals = [
    "Amri Hospital",
    "Desun Hospital",
    "Apollo Multispeciality Hospital",
    "Woodlands Multispeciality Hospital",
    "Manipal Hospitals Broadway",
    "Iris Multispeciality Hospital",
    "Charnock Hospital",
    "Medica Superspecialty Hospital",
    "Eskag Sanjeevani Multispeciality Hospital",
    "ILS Hospitals"
];

// Function to open the modal and display the hospital list
document.querySelector(".nursing").addEventListener("click", function () {
    hospitalsModal.style.display = "block";
    const hospitalList = document.getElementById("hospitalList");

    // Clear previous list and add hospital items
    hospitalList.innerHTML = hospitals.map(hospital => `<li>${hospital}</li>`).join('');
});

// Function to close the modal when clicking the "x"
closeHospitalsButton.onclick = function() {
    hospitalsModal.style.display = "none";
};

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == hospitalsModal) {
        hospitalsModal.style.display = "none";
    }
};


// Get the modals
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

// Get the buttons
const loginButton = document.querySelector(".login");
const signupButton = document.querySelector(".signup");

// Get all close elements
const closeButtons = document.querySelectorAll(".close");

// Event listeners for opening modals
loginButton.addEventListener("click", () => {
    loginModal.style.display = "block";
});

signupButton.addEventListener("click", () => {
    signupModal.style.display = "block";
});

// Close modal when "x" is clicked
closeButtons.forEach(button => {
    button.onclick = function() {
        button.closest(".modal").style.display = "none";
    };
});

// Close the modal if clicking outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};


// Get modal and the open/close elements
const shopModal = document.getElementById("shopsModal");
const shopCard = document.getElementById("shopCard");
const closeShopModal = document.getElementById("closeShopModal");

// Open the modal when the 'Shops' card is clicked
shopCard.onclick = function () {
    shopModal.style.display = "block";
}

// Close the modal when the close button is clicked
closeShopModal.onclick = function () {
    shopModal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function (event) {
    if (event.target === shopModal) {
        shopModal.style.display = "none";
    }
}


// Get modal and the open/close elements
const ambulanceModal = document.getElementById("ambulanceModal");
const ambulanceCard = document.getElementById("ambulanceCard");
const closeAmbulanceModal = document.getElementById("closeAmbulanceModal");

// Open the modal when the 'Ambulance' card is clicked
ambulanceCard.onclick = function () {
    ambulanceModal.style.display = "block";
}

// Close the modal when the close button is clicked
closeAmbulanceModal.onclick = function () {
    ambulanceModal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function (event) {
    if (event.target === ambulanceModal) {
        ambulanceModal.style.display = "none";
    }
}


// Appointment Modal functionality
document.getElementById("appointmentCard").onclick = function () {
    document.getElementById("appointmentModal").style.display = "block";
};

document.getElementById("closeAppointmentModal").onclick = function () {
    document.getElementById("appointmentModal").style.display = "none";
};

// Optional: Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById("appointmentModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
