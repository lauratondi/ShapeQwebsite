const form = document.getElementById('contact-form');

//1.
const formEvent = form.addEventListener('submit', (event) => {
  event.preventDefault();

  //2.
  let mail = new FormData(form);

  //3.
  sendMail(mail);
});

const sendMail = (mail) => {
  //1.
  fetch('http://127.0.0.1:5500/public/contact.html/send', {
    method: 'post', //2.
    body: mail, //3.
  }).then((response) => {
    return response.json();
  });
};
