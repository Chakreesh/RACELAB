// // Replace the placeholders with your actual EmailJS user ID and service ID
// const EMAILJS_USERID = 'chakreesh34@gmail.com';
// const EMAILJS_SERVICEID = 'service_hjsr94k';

// document.getElementById('contact-form').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent the form from submitting

//   // Display the loading message
//   const loadingElement = document.querySelector('.loading');
//   loadingElement.style.display = 'block';

//   // Get the form data
//   const formData = new FormData(this);

//   // Send the email using EmailJS
//   emailjs.sendForm(EMAILJS_SERVICEID, 'template_id', this)
//     .then(function () {
//       // Clear the form fields
//       document.getElementById('name').value = '';
//       document.getElementById('email').value = '';
//       document.getElementById('subject').value = '';
//       document.getElementById('message').value = '';

//       // Display the success message
//       const sentMessageElement = document.querySelector('.sent-message');
//       sentMessageElement.style.display = 'block';

//       // Hide the loading message after a delay
//       setTimeout(function () {
//         loadingElement.style.display = 'none';
//       }, 2000);
//     }, function (error) {
//       // Display the error message
//       const errorMessageElement = document.querySelector('.error-message');
//       errorMessageElement.innerText = `An error occurred: ${error}`;

//       // Hide the loading message
//       loadingElement.style.display = 'none';
//     });
// });

function send() {
  var params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_j9ugwte", "template_owf9kqm", params)
    .then(function (res) {
      alert("Thank you for contacting to Us. Will reply back soon");
    });
}
