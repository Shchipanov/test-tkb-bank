const btnAdd = document.querySelector('.form__buttons-add');
const btnDel = document.querySelector('.form__buttons-del');
const table = document.querySelector('.form__table > tbody');

function addRow() {
  btnAdd.addEventListener('click', () => {
    const row = `
    <tr>
      <td>
       <label for="name"></label>
        <input type="text" name="name" id="name" pattern="^[a-zA-ZA-Яа-яЁё\s\D [^0-9]]+$" required>
      </td>
      <td>
        <select name="select[]" id="select">
          <option value="Аналитик">Аналитик</option>
          <option value="Менеджер">Менеджер</option>
          <option value="Программист">Программист</option>
          <option value="Юрист">Юрист</option>
        </select>
      </td>
      <td>
        <label for="age"></label>
        <input type="number" id="age" required>
      </td>
      <td>
        <textarea id="competencies" maxlength="200"></textarea>
      </td>
    </tr>
  `;
    table.insertAdjacentHTML('beforeEnd', row);
  });
}

function deleteRow() {
  let table0 = document.querySelector('.form__table > tbody');
  let rowCount = table0.rows.length;

  table.deleteRow(rowCount - 1);
}

btnDel.addEventListener('click', deleteRow);

export {addRow};
