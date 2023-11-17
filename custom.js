// custom.js

document.addEventListener("DOMContentLoaded", function () {
    const servicesLink = document.querySelector('a[href="#services"]');
    const servicesSection = document.getElementById('services');

    servicesLink.addEventListener('click', function (event) {
        event.preventDefault();
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.getElementById('about');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector('a[href="#contact"]');
    const contactSection = document.getElementById('contact');

    contactLink.addEventListener('click', function (event) {
        event.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector('a[href="#home"]');
    const homeSection = document.getElementById('home');

    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.getElementById("read-more");
    const hiddenContent = document.querySelector(".about-content .content-part");

    readMoreButton.addEventListener("click", function () {
        hiddenContent.style.display = (hiddenContent.style.display === "none" || hiddenContent.style.display === "") ? "block" : "none";
    });
});


// Check if the 'username' session variable exists
if ('username' in session) {
    // User is logged in, change the button text to "Sign Out"
    var loginButton = document.getElementById('login-signup-button');
    loginButton.textContent = "Sign Out";
    // Set the button's href to the logout URL (e.g., "/logout")
    loginButton.href = "./Dashboard.html";
}


