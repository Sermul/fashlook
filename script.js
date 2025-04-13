document.addEventListener("DOMContentLoaded", () => {
    console.log("Fashlook ready!");
  
    const btn = document.querySelector(".highlight-button");
    if (btn) {
      btn.addEventListener("click", () => {
        alert("Kamu klik tombol highlight!");
      });
    }
  });
  
  // Get the hamburger icon and navbar
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Toggle the visibility of the navbar when hamburger icon is clicked
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('hidden'); // Toggle 'hidden' class to show/hide the menu
});
