
// Initialize EmailJS
emailjs.init('YlL0xYZ1M2IpbpuMz');

// contact form submission
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_wci19fq', 'template_b9o3cea', this).then(
      function () {
        console.log('SUCCESS!');
        alert('Your message has been sent. We will get back to you shortly.');
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  });