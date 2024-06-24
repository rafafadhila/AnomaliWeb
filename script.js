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
const form_success = document.querySelector(".form_success");
const form_loader = document.querySelector(".form_loader");

// captcha
const captchaCanvas = document.getElementById('captcha-image');
const captchaInput = document.getElementById('captcha-input');
const refreshButton = document.getElementById('refresh-captcha');
const submitButton = document.getElementById('submitbtn');

function generateCaptcha() {
  const ctx = captchaCanvas.getContext('2d');
  ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);

  // Generate random numbers and text
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let captchaText = '';
  for (let i = 0; i < 5; i++) {
    captchaText += letters.charAt(Math.floor(Math.random() * letters.length));
    // Add a space after each character (except the last one)
    if (i < 4) {
      captchaText += ' ';
    }
  }

  // Set font and text
  ctx.font = '60px Special Elite';
  ctx.fillStyle = '#525252';
  ctx.fillText(captchaText, 35, 100);
 
  // Add distortions
  for (let i = 0; i < captchaCanvas.width; i++) {
    for (let j = 0; j < captchaCanvas.height; j++) {
      const x = i + Math.random() * 2 - 1;
      const y = j + Math.random() * 2 - 1;
      ctx.putImageData(ctx.getImageData(i, j, 5, 5), x, y);
    }
  }

  // Add lines
  for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
    ctx.lineTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
    ctx.strokeStyle = "#525252"; // Hexadecimal color code
    ctx.stroke();
  }

  return captchaText;
}

let captchaCode;

// Generate initial captcha
captchaCode = generateCaptcha();

refreshButton.addEventListener('click', () => {
  captchaCode = generateCaptcha();
});

captchaInput.addEventListener('keyup', () => {
  if (captchaInput.value === captchaCode) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});


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

    form_loader.classList.remove('form_loader');
    form_loader.classList.add('form_loader--display');

    form_success.classList.remove('form_success--display')
    form_success.textContent = "";

    setTimeout(function() {
      form.reset(); //reset the form

      // display the sucess message
      form_success.classList.remove('form_success');
      form_success.classList.add('form_success--display');
      form_success.textContent = "Your Message has been submitted!";

      // display loader
      form_loader.classList.remove('form_loader--display');

    }, 2000); // Reset form after 2 seconds\
  }
);


