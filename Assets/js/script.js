/*Show Menu*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    toggleCloseButton(true);
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    toggleCloseButton(false);
  });
}

/*Remove menu mobile*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
  toggleCloseButton(false); // Menyembunyikan tombol close saat menu disembunyikan
};

navLinks.forEach((link) => {
  link.addEventListener("click", linkAction);
});

// Fungsi untuk menampilkan atau menyembunyikan tombol close berdasarkan status menu
function toggleCloseButton(show) {
  if (navClose) {
    navClose.style.display = show ? "block" : "none";
  }
}
/*Add blur */
const blurHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

$(document).ready(function () {
  $("#MessageForm").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    if (!isValidName(name)) {
      showAlert("Nama tidak boleh mengandung angka", "error");
      return;
    }

    var email = $("#email").val();
    if (!isValidEmail(email)) {
      showAlert("Masukkan alamat email dengan benar.", "error");
      return;
    }

    var number = $("#number").val();
    if (!isValidPhoneNumber(number)) {
      showAlert("Nomor telepon harus diantara 10 sampai 13 karakter.", "error");
      return;
    }

    showAlert("Formulir berhasil dikirim!", "success");

    this.reset();
  });
});

function showAlert(message, type) {
  $("#alertMessage").removeClass("alert-success alert-error");

  var alertClass = type === "success" ? "alert-success" : "alert-error";

  $("#alertMessage").text(message).addClass(alertClass).fadeIn("slow");

  setTimeout(function () {
    $("#alertMessage").fadeOut("slow");
  }, 3000);
}

function isValidName(name) {
  var nameRegex = /^[a-zA-Z\s]*$/;
  return nameRegex.test(name);
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(number) {
  var numberRegex = /^\d{10,13}$/;
  return numberRegex.test(number);
}
