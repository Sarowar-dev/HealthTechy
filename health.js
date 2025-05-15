document.addEventListener("DOMContentLoaded", () => {
    // Sidebar toggle
    const check = document.querySelector(".check");
    const doctorMenu = document.getElementById("doctor");
    if (check && doctorMenu) {
      check.addEventListener("change", () => {
        doctorMenu.style.transform = check.checked ? "translateX(0)" : "translateX(-220px)";
      });
    }
  
    // Redirect alerts for login/signup buttons
    const loginBtn = document.querySelector(".login");
    const signupBtn = document.querySelector(".signup");
    if (loginBtn) loginBtn.addEventListener("click", () => alert("Redirecting to login page..."));
    if (signupBtn) signupBtn.addEventListener("click", () => alert("Redirecting to signup page..."));
  
    // Toggle doctor specialties lists
    document.querySelectorAll(".doctorlist").forEach(specialty => {
      specialty.addEventListener("click", () => {
        const ul = specialty.nextElementSibling;
        if (ul) ul.style.display = ul.style.display === "none" ? "block" : "none";
      });
    });
  
    // Make emails clickable mailto links
    document.querySelectorAll("#email").forEach(email => {
      email.addEventListener("click", () => {
        window.location.href = "mailto:" + email.textContent.trim();
      });
    });
  
    // Contact Us phone call button
    const contactBtn = document.getElementById("ContactUsButton");
    if (contactBtn) {
      contactBtn.addEventListener("click", () => {
        window.location.href = "tel:+918637855177";
      });
    }
  
    // Generic modal setup helper
    function setupModal(modalId, openSelectors = [], closeSelector) {
      const modal = document.getElementById(modalId);
      if (!modal) return null;
  
      // Open modal on clicking any openSelectors
      openSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(elem => {
          elem.addEventListener("click", () => {
            modal.style.display = "block";
          });
        });
      });
  
      // Close modal on clicking close button
      const closeBtn = modal.querySelector(closeSelector);
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
        });
      }
  
      return modal;
    }
  
    // Setup all modals
    const identifyModal = setupModal("identifyModal", [".identify"], ".close");
    const doctorsModal = setupModal("doctorsModal", [".doc"], ".close");
    const hospitalsModal = setupModal("hospitalsModal", [".nursing", "#hospitalCard"], ".close");
    const loginModal = setupModal("loginModal", [".login"], ".close");
    const signupModal = setupModal("signupModal", [".signup"], ".close");
    const shopsModal = setupModal("shopsModal", ["#shopCard"], "#closeShopModal");
    const ambulanceModal = setupModal("ambulanceModal", ["#ambulanceCard"], "#closeAmbulanceModal");
    const appointmentModal = setupModal("appointmentModal", ["#appointmentCard"], "#closeAppointmentModal");
    const hospitalBookingModal = setupModal("hospitalBookingModal", [], ".close");
  
    // Close modals when clicking outside modal content
    window.addEventListener("click", event => {
      [
        identifyModal,
        doctorsModal,
        hospitalsModal,
        loginModal,
        signupModal,
        shopsModal,
        ambulanceModal,
        appointmentModal,
        hospitalBookingModal,
      ].forEach(modal => {
        if (modal && event.target === modal) {
          modal.style.display = "none";
        }
      });
    });
  
    // Identify illness modal submit function
    window.identifyIllness = function () {
      if (!identifyModal) return;
      const symptomsInput = identifyModal.querySelector("input");
      if (!symptomsInput) return;
      const symptoms = symptomsInput.value.trim();
      if (symptoms) {
        alert("Searching for illnesses related to: " + symptoms);
        identifyModal.style.display = "none";
      } else {
        alert("Please enter symptoms to proceed.");
      }
    };
  
    // Doctor specialties data
    const doctorsData = {
      orthopedic: ["D. Sardar", "R. Mondal", "Lk. Mukherjee", "Vibhas Mondal", "Samim Khan"],
      cardiology: ["Naresh Trehan", "Ashok Seth", "S. K. Gupta", "K. K. Agarwal", "C. N. Makhija"],
      general: ["M. G. Alam", "Md Samsujjaman", "SK. Ghosh", "Sahid Imam Mallick", "Khairul Imam Mallick"],
      child: ["M.A. Habib", "Mustakim Laskar", "Halim Sk.", "Mariya Arjuman"],
      dental: ["Goutam Naskar", "Mosiur Rahaman Laskar", "Rakibul Molla", "Inzamul Haque", "Khairul Gazi"]
    };
  
    // Elements for doctor & appointment handling
    const specialtySelect = document.getElementById("specialty");
    const doctorListDiv = document.getElementById("doctorList");
    const doctorNameInput = document.getElementById("doctorName");
    const appointmentForm = document.getElementById("appointmentForm");
  
    // Show doctors based on specialty selection
    function showDoctors() {
      if (!specialtySelect || !doctorListDiv) return;
  
      const specialty = specialtySelect.value;
      const doctors = doctorsData[specialty] || [];
  
      doctorListDiv.innerHTML = "";
  
      if (doctors.length === 0) {
        doctorListDiv.innerHTML = "<p>No doctors found for this specialty.</p>";
        return;
      }
  
      const ul = document.createElement("ul");
      doctors.forEach(doctor => {
        const li = document.createElement("li");
        li.textContent = doctor;
        li.style.cursor = "pointer";
        li.classList.add("doctor-item");
  
        li.addEventListener("click", () => openAppointmentModal(doctor));
  
        ul.appendChild(li);
      });
      doctorListDiv.appendChild(ul);
    }
  
    // Open appointment modal with selected doctor
    function openAppointmentModal(doctorName) {
      if (!doctorNameInput || !appointmentModal || !doctorsModal) return;
  
      doctorNameInput.value = doctorName;
      appointmentModal.style.display = "block";
      doctorsModal.style.display = "none";
    }
  
    // Add event listener to doctors modal button to show doctors
    if (doctorsModal) {
      const viewDoctorsBtn = doctorsModal.querySelector("button");
      if (viewDoctorsBtn) {
        viewDoctorsBtn.addEventListener("click", showDoctors);
      }
    }
  
    // Appointment form submit handler
    if (appointmentForm) {
      appointmentForm.addEventListener("submit", e => {
        e.preventDefault();
        alert(`Appointment requested with Dr. ${doctorNameInput.value}!\nWe will contact you soon.`);
        appointmentForm.reset();
        appointmentModal.style.display = "none";
      });
    }
  
    // Hospital list click handler to open booking modal
    const bookingHospitalName = document.getElementById("bookingHospitalName");
    const hospitalBookingForm = document.getElementById("hospitalBookingForm");
    const hospitalList = document.getElementById("hospitalList");
  
    if (hospitalList && hospitalBookingModal && bookingHospitalName && hospitalsModal) {
      hospitalList.addEventListener("click", e => {
        if (e.target && e.target.tagName === "LI") {
          const hospitalName = e.target.textContent.trim();
  
          bookingHospitalName.textContent = hospitalName;
  
          hospitalBookingModal.style.display = "block";
          hospitalsModal.style.display = "none";
        }
      });
    }
  
    // Hospital booking form submit handler
    if (hospitalBookingForm && hospitalBookingModal) {
      hospitalBookingForm.addEventListener("submit", e => {
        e.preventDefault();
  
        alert(`Booking submitted for ${bookingHospitalName.textContent}! We will contact you soon.`);
  
        hospitalBookingForm.reset();
        hospitalBookingModal.style.display = "none";
      });
    }
  });
  