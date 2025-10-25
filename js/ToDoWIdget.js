import UIComponent from './UIComponent.js';

export default class ToDoWidget extends UIComponent {
  constructor(title = 'Список дел', id) {
    super(title, id);
    this.tasks = [];
  }

  render() {
    const wrapper = super.render();
    const body = wrapper.querySelector('.widget-body');
    body.innerHTML = `
      <div class="todo-widget">
        <input type="text" placeholder="Новая задача..." class="todo-input" />
        <button class="add-task">Добавить</button>
        <ul class="task-list"></ul>
      </div>
    `;
    this._bindEvents(body);
    return wrapper;
  }

  _bindEvents(body) {
    const input = body.querySelector('.todo-input');
    const button = body.querySelector('.add-task');
    const list = body.querySelector('.task-list');

    const renderTasks = () => {
      list.innerHTML = '';
      this.tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="${task.done ? 'done' : ''}">${task.text}</span>
          <button data-index="${index}" class="delete-btn">🗑</button>
        `;
        li.addEventListener('click', (e) => {
          if (e.target.tagName === 'SPAN') {
            this.tasks[index].done = !this.tasks[index].done;
            renderTasks();
          }
        });
        list.appendChild(li);
      });
    };

    button.addEventListener('click', () => {
      const text = input.value.trim();
      if (text) {
        this.tasks.push({ text, done: false });
        input.value = '';
        renderTasks();
      }
    });

    list.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        this.tasks.splice(index, 1);
        renderTasks();
      }
    });
  }
}
