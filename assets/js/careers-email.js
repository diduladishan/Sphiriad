
// Initialize EmailJS
emailjs.init('z1Z3dhBT6U-bubznG');

document
  .getElementById('careers-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_snw1g78', 'template_4ksm0l9', this).then(
      function () {
        console.log('SUCCESS!');
        alert('Your message has been sent. We will get back to you shortly.');
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  });
