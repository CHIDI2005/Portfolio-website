const navButtons = document.querySelectorAll('.nav-button');

navButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Remove active class from all buttons
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    button.classList.add('active');

    // Get the href value for navigation
    const page = button.querySelector('a').href.split('/').slice(-1)[0];

    // Simulate navigation 
    window.location.href = page; 
  });
});