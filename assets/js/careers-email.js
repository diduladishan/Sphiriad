
// Initialize EmailJS
emailjs.init('z1Z3dhBT6U-bubznG');

document
  .getElementById('careers-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_snw1g78', 'template_4ksm0l9', this).then(
      function () {
        console.log('SUCCESS!');
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  });
