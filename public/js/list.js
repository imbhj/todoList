const todoList = document.querySelector('#todoList');
// 화살표 함수 대체 => 함수 표현식
const getTodos = function () {
  const todos = JSON.parse(localStorage.getItem('todos')) || false;
  if (!todos) return (todoList.innerHTML = '<p>유저 정보가 없어유 ㅠ</p>');

  todos.map((value) => {
    const authorEl = document.createElement('li');
    const titleEl = document.createElement('li');
    const contentEl = document.createElement('li');

    authorEl.textContent = value.author;
    titleEl.textContent = value.title;
    contentEl.textContent = value.content;

    todoList.append(authorEl, titleEl, contentEl);
  });
};

getTodos();
