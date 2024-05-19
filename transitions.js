document.addEventListener("DOMContentLoaded", function() {
  const navButtons = document.querySelectorAll(".nav-button");

  navButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault();
      const targetPage = this.querySelector("a").getAttribute("href");
      fadeOutAndNavigate(targetPage);
    });
  });
});

function fadeOutAndNavigate(targetPage) {
  const body = document.body;
  body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = targetPage;
  }, 500); // Adjust the timeout to match your transition duration
}
