document.addEventListener('DOMContentLoaded', function () {
  const $button = document.querySelector('button');
  $button.addEventListener('click', function (event) {
    event.preventDefault();
    newRegister();
  });

  // todo-list-item 삭제
  const $todoList = document.querySelector('#todo-list');
  $todoList.addEventListener('click', (event) => {
    const $targetLi = event.target.closest('.todo-list-item');
    if (event.target.matches('.remove span')) {
      if (confirm('삭제하시겠습니까?')) {
        $targetLi.remove();
      }
    }
  });

  // const $check = document.getElementById('#check');
  // const $todo = document.getElementsByClassName('.text');

  // $check.addEventListener('click', function () {
  //   $todo.classList.toggle('enabled', this.checked);
  //   $todo.classList.toggle('disabled', !this.checked);
  //   $todo.disabled = !this.checked;
  // });
});

// todo-list-item 추가
function newRegister() {
  const $newElement = document.createElement('li');
  const $addList = document.querySelector('#add-list');
  if ($addList.value.trim() == '') {
    alert('입력값이 없습니다.');
    $addList.value = '';
  } else {
    const $newText = document.createTextNode($addList.value);

    $newElement.appendChild($newText);

    const $todoList = document.querySelector('#todo-list');
    $newElement.dataset.id = 4;
    $newElement.classList.add('todo-list-item');
    $newElement.innerHTML = `
    <input type="checkbox">
    <span class="text" disabled>${$addList.value}</span>
    <div class="modify"><span class="lnr lnr-undo"></span></div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
  `;
    $todoList.appendChild($newElement);

    $addList.value = '';
  }
}
