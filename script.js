window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    // Add a class for smooth fading animation (optional)
    loader.classList.add("loader--fade");
  
    // Set a timeout to remove the loader after 3 seconds
    setTimeout(() => {
      loader.classList.remove("loader--fade"); // Remove fade class (if used)
      loader.classList.add("loader--hidden"); // Add hidden class for transition
    }, 200); // Delay in milliseconds
  
    // Optionally, handle the transitionend event for cleaner removal
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width ="0px";
}

const form = document.getElementById('myForm'); // Get reference to the form

form.addEventListener('submit', (event) => {
  const nameInput = form.elements.name; // Get form elements by name
  const emailInput = form.elements.email;
  const subjectInput = form.elements.subject;

  // Check if all required fields are filled (excluding textarea)
  if (!nameInput.value || !emailInput.value || !subjectInput.value) {
    event.preventDefault(); // Prevent default form submission

    // Display an error message (optional)
    alert('Please fill in all required fields (Name, Email, Subject).');
  }
});