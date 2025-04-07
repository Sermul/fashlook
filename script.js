document.addEventListener("DOMContentLoaded", () => {
    console.log("Fashlook ready!");
  
    const btn = document.querySelector(".highlight-button");
    if (btn) {
      btn.addEventListener("click", () => {
        alert("Kamu klik tombol highlight!");
      });
    }
  });
  