const formElement = document.querySelector('[data-form]');

function postData() {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);

    const name = formData.get('name');
    const age = formData.get('age');
    const competencies = formData.get('competencies');
    const select = formData.get('select');

     console.log(name, age, competencies, select);
     // postData(name, age, competencies, select);
  });
// console.log(postData());
}

export {postData};
