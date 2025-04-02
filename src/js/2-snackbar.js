import iziToast from 'izitoast';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitButton);

function onSubmitButton(e) {
  e.preventDefault();

  const delay = parseInt(form.elements.delay.value, 10);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (form.elements.state.value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(() => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: 'green',
        maxWidth: '300px',
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: 'orange',
        maxWidth: '300px',
      });
    });
}
